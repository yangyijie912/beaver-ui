export type PaginationLocale = {
  prev?: string;
  next?: string;
  jumpTo?: string;
  page?: string;
  /** 总数格式化函数，例如 n => `共 ${n} 条` */
  total?: (n: number) => string;
  itemsPerPage?: (n: number) => string;
};

export const zh: PaginationLocale = {
  prev: '上一页',
  next: '下一页',
  jumpTo: '跳到',
  page: '页',
  total: (n: number) => `共 ${n} 条`,
  itemsPerPage: (n: number) => `${n} / 页`,
};

export const en: PaginationLocale = {
  prev: 'Previous',
  next: 'Next',
  jumpTo: 'Jump to',
  page: '',
  total: (n: number) => `${n} items`,
  itemsPerPage: (n: number) => `${n} / page`,
};

export const defaultLocale: PaginationLocale = zh;
