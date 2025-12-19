import React, { useState, useMemo, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import type { PaginationProps } from '../Pagination/Pagination';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import { Props } from './types';
import { useWrapSize, useScrollState } from './hooks/useTableLayout';
import useColumnWidths from './hooks/useColumnWidths';

// 兼容旧的导入方式：`import Table, { Column } from './Table'`
export type { Column, Row } from './types';

const Table = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      columns,
      data,
      loading = false,
      pagination,
      rowKey = 'id',
      defaultAlign = 'left',
      showCheckbox = false,
      selectedKeys,
      onSelectionChange,
      renderCell,
      preservePxAsMin = true,
      minColumnPx = 80,
      fixedHeader = false,
      headerOffset = 0,
      maxHeight,
      fixedColumnCount = 0,
      fixedRightCount = 0,
      border = false,
      empty,
      emptyText,
    },
    ref
  ) => {
    // pagination prop 类型：false | Partial<PaginationProps> | undefined
    // 如果父组件传入了分页配置且未提供 onChange，则 Table 会在本地做 client-side 分页（对 data 切片）
    const paginationEnabled = pagination !== false && pagination != null;
    const paginationObj =
      paginationEnabled && typeof pagination === 'object' ? (pagination as Partial<PaginationProps>) : undefined;
    const isClientSidePagination =
      paginationEnabled && !(paginationObj && typeof paginationObj.onChange === 'function');

    const [internalPage, setInternalPage] = useState<number>(paginationObj?.current ?? 1);
    const [internalPageSize, setInternalPageSize] = useState<number>(paginationObj?.pageSize ?? 10);

    useEffect(() => {
      if (paginationObj && typeof paginationObj.current === 'number') setInternalPage(paginationObj.current);
    }, [paginationObj?.current]);

    useEffect(() => {
      if (paginationObj && typeof paginationObj.pageSize === 'number') setInternalPageSize(paginationObj.pageSize);
    }, [paginationObj?.pageSize]);

    const totalCount = paginationObj?.total ?? data.length;
    // 保证当前页不超过最大页数
    useEffect(() => {
      const pages = Math.max(1, Math.ceil(totalCount / internalPageSize));
      if (internalPage > pages) setInternalPage(pages);
    }, [totalCount, internalPageSize]);

    const effectiveCurrent = paginationObj?.current ?? internalPage;
    const effectivePageSize = paginationObj?.pageSize ?? internalPageSize;

    const handlePageChange = (page: number, pageSize?: number) => {
      if (paginationObj && typeof paginationObj.onChange === 'function') {
        paginationObj.onChange(page, pageSize);
      } else {
        if (typeof pageSize === 'number') setInternalPageSize(pageSize);
        setInternalPage(page);
      }
    };
    // 根据是否为 client-side 分页决定展示的数据切片
    const displayData = isClientSidePagination
      ? data.slice((effectiveCurrent - 1) * effectivePageSize, effectiveCurrent * effectivePageSize)
      : data;
    const [internalSelected, setInternalSelected] = useState<Record<string, boolean>>({});
    const isControlled = Array.isArray(selectedKeys);

    // 包装器引用和宽度测量（由 hook 管理）
    const { wrapRef, wrapWidth } = useWrapSize();

    // 构建当前所用的 selected map：受控时使用 prop，否则使用内部 state
    // 注意：selectedMap 始终为 { key: true } 的字典形式，便于查找
    const selectedMap: Record<string, boolean> = useMemo(() => {
      if (isControlled) {
        const map: Record<string, boolean> = {};
        selectedKeys!.forEach((k) => (map[k] = true));
        return map;
      }
      return internalSelected;
    }, [isControlled, selectedKeys, internalSelected]);

    const notifySelectionChange = (nextMap: Record<string, boolean>) => {
      const keys = Object.keys(nextMap).filter((k) => nextMap[k]);
      onSelectionChange?.(keys);
    };

    const toggle = (key: string, checked?: boolean) => {
      if (isControlled) {
        const current = new Set(selectedKeys);
        const exists = current.has(key);
        const next = new Set(current);
        if (typeof checked === 'boolean') {
          if (checked) next.add(key);
          else next.delete(key);
        } else {
          if (exists) next.delete(key);
          else next.add(key);
        }
        const nextArr = Array.from(next);
        onSelectionChange?.(nextArr);
        return;
      }
      setInternalSelected((s) => {
        const next = typeof checked === 'boolean' ? { ...s, [key]: checked } : { ...s, [key]: !s[key] };
        notifySelectionChange(next);
        return next;
      });
    };

    const toggleAll = (checked: boolean) => {
      if (checked) {
        const map: Record<string, boolean> = {};
        displayData.forEach((r, i) => {
          const k = String(r[rowKey] ?? i);
          map[k] = true;
        });
        if (isControlled) {
          onSelectionChange?.(Object.keys(map));
        } else {
          setInternalSelected(map);
          notifySelectionChange(map);
        }
        return;
      }
      if (isControlled) {
        onSelectionChange?.([]);
      } else {
        setInternalSelected({});
        notifySelectionChange({});
      }
    };

    const total = displayData.length;
    const selectedCount = Object.keys(selectedMap).reduce((sum, k) => (selectedMap[k] ? sum + 1 : sum), 0);
    const headerChecked = total > 0 && displayData.every((r, i) => !!selectedMap[String(r[rowKey] ?? i)]);
    const headerIndeterminate = selectedCount > 0 && !headerChecked;

    // 限制固定列：避免左 + 右 固定列数量覆盖或重叠整个表格
    const totalColumns = columns.length;
    let leftFixedCount = Math.max(0, Math.min(fixedColumnCount, totalColumns));
    let rightFixedCount = Math.max(0, Math.min(fixedRightCount, totalColumns));
    if (leftFixedCount + rightFixedCount >= totalColumns) {
      console.warn(
        '[Beaver-Table] fixedColumnCount + fixedRightCount >= columns.length — disabling fixed columns to avoid overlap'
      );
      leftFixedCount = 0;
      rightFixedCount = 0;
    }

    // 通过 useColumnWidths 钩子统一获取列宽计算结果、像素偏移和左右粘性宽度
    const { computedColumnWidths, columnPxOffsets, leftStickyWidth, rightStickyWidth, hasAnyWidth } = useColumnWidths({
      columns,
      wrapWidth,
      showCheckbox,
      preservePxAsMin,
      minColumnPx,
      leftFixedCount,
      rightFixedCount,
    });

    // 当左右粘性区域宽度之和超过容器宽度时，禁用固定列并在控制台打印警告
    const [effectiveLeftFixed, setEffectiveLeftFixed] = useState<number>(leftFixedCount);
    const [effectiveRightFixed, setEffectiveRightFixed] = useState<number>(rightFixedCount);

    useEffect(() => {
      const wrapW = wrapWidth ?? (wrapRef.current ? wrapRef.current.clientWidth : null);
      if (wrapW == null) {
        setEffectiveLeftFixed(leftFixedCount);
        setEffectiveRightFixed(rightFixedCount);
        return;
      }
      const stickyTotal = leftStickyWidth + rightStickyWidth;
      if (stickyTotal >= wrapW) {
        // 禁用固定列
        if (!(effectiveLeftFixed === 0 && effectiveRightFixed === 0)) {
          console.warn(
            `[Beaver-Table] fixed columns disabled: leftStickyWidth(${leftStickyWidth}) + rightStickyWidth(${rightStickyWidth}) >= containerWidth(${wrapW})`
          );
        }
        setEffectiveLeftFixed(0);
        setEffectiveRightFixed(0);
      } else {
        setEffectiveLeftFixed(leftFixedCount);
        setEffectiveRightFixed(rightFixedCount);
      }
      // 仅在相关输入更改时重新计算
    }, [wrapWidth, leftStickyWidth, rightStickyWidth, leftFixedCount, rightFixedCount]);

    const { hasLeftShadow, hasRightShadow, hasColumnEdgeShadow, scrollbarHeight, scrollbarWidth, headerHeight } =
      useScrollState({
        wrapRef,
        effectiveLeftFixed,
        effectiveRightFixed,
        fixedHeader,
        computedTableWidth: computedColumnWidths.tableWidth,
      });

    return (
      <div
        className={`beaver-table__frame ${hasLeftShadow ? 'has-left-shadow' : ''} ${
          hasRightShadow ? 'has-right-shadow' : ''
        } ${fixedHeader ? 'beaver-table__frame--fixed-header' : ''}`}
        ref={ref as React.Ref<HTMLDivElement>}
        style={
          {
            ['--beaver-table-left-sticky-width' as any]: `${leftStickyWidth}px`,
            ['--beaver-table-right-sticky-width' as any]: `${rightStickyWidth}px`,
            ['--beaver-table-scrollbar-height' as any]: `${scrollbarHeight}px`,
            ['--beaver-table-scrollbar-width' as any]: `${scrollbarWidth}px`,
            ['--beaver-table-header-height' as any]: `${headerHeight}px`,
            ['--beaver-table-scrollable-height' as any]: `calc(100% - ${scrollbarHeight}px)`,
          } as React.CSSProperties
        }
      >
        <div
          className={`beaver-table__wrap ${border ? 'beaver-table__wrap--bordered' : ''}`}
          ref={wrapRef}
          style={{
            overflowX: computedColumnWidths.needsHScroll ? 'auto' : undefined,
            overflowY: fixedHeader ? 'auto' : undefined,
            // 为固定表头场景提供滚动条安全内边距，避免遮挡内容
            paddingBottom: fixedHeader ? 12 : undefined,
            maxHeight:
              fixedHeader && maxHeight != null
                ? typeof maxHeight === 'number'
                  ? `${maxHeight}px`
                  : maxHeight
                : undefined,
          }}
        >
          <table
            className={`beaver-table ${fixedHeader ? 'beaver-table--fixed-header' : ''} ${
              border ? 'beaver-table--bordered' : ''
            } ${hasColumnEdgeShadow ? 'beaver-table--column-edge-shadow' : ''}`}
            style={{ tableLayout: hasAnyWidth ? 'fixed' : 'auto', width: computedColumnWidths.tableWidth }}
          >
            {hasAnyWidth ? (
              <colgroup>
                {showCheckbox ? <col key="__select_col__" style={{ width: '40px' }} /> : null}
                {columns.map((c) => {
                  const cw = computedColumnWidths.cols.find((x) => x.key === c.key)?.width;
                  return <col key={c.key} style={cw ? { width: cw } : undefined} />;
                })}
              </colgroup>
            ) : null}

            <TableHeader
              columns={columns}
              computedColumnWidths={computedColumnWidths}
              showCheckbox={showCheckbox}
              effectiveLeftFixed={effectiveLeftFixed}
              effectiveRightFixed={effectiveRightFixed}
              columnPxOffsets={columnPxOffsets}
              headerOffset={headerOffset}
              fixedHeader={fixedHeader}
              defaultAlign={defaultAlign}
              headerChecked={headerChecked}
              headerIndeterminate={headerIndeterminate}
              toggleAll={toggleAll}
            />

            <TableBody
              columns={columns}
              data={displayData}
              rowKey={rowKey}
              selectedMap={selectedMap}
              showCheckbox={showCheckbox}
              toggle={toggle}
              effectiveLeftFixed={effectiveLeftFixed}
              effectiveRightFixed={effectiveRightFixed}
              columnPxOffsets={columnPxOffsets}
              loading={loading}
              renderCell={renderCell}
              defaultAlign={defaultAlign}
              empty={empty}
              emptyText={emptyText}
            />
          </table>
          {/* loading visual is rendered inside TableBody to reuse empty-state styles */}
        </div>
        {/* 分页区 */}
        {paginationEnabled ? (
          <div className="beaver-table__footer">
            <Pagination
              {...paginationObj}
              total={totalCount}
              current={effectiveCurrent}
              pageSize={effectivePageSize}
              onChange={handlePageChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
);

Table.displayName = 'Table';

export default Table;
