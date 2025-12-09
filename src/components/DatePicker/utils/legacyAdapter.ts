/**
 * DatePicker 向后兼容性适配层
 * 将旧的 PickerType ('date' | 'month' | 'year' | 'datetime' | 'daterange' | 'datetimerange')
 * 转换为新的 (picker + range) 组合
 */

import type { PickerType as NewPickerType } from '../types';

export type LegacyPickerType = NewPickerType | 'daterange' | 'datetimerange';

/**
 * 将旧的 picker 类型转换为新的 picker + range 组合
 */
export const convertLegacyPickerType = (legacyPicker: LegacyPickerType): { picker: NewPickerType; range: boolean } => {
  switch (legacyPicker) {
    case 'daterange':
      return { picker: 'date', range: true };
    case 'datetimerange':
      return { picker: 'datetime', range: true };
    case 'year':
    case 'month':
    case 'date':
    case 'datetime':
    default:
      return { picker: legacyPicker, range: false };
  }
};

/**
 * 将新的 picker + range 组合转换为旧的 picker 类型（用于显示/调试）
 */
export const convertToLegacyPickerType = (picker: NewPickerType, range: boolean): LegacyPickerType => {
  if (range === true) {
    if (picker === 'date') return 'daterange';
    if (picker === 'datetime') return 'datetimerange';
  }
  return picker;
};
