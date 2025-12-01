export type PaginationLocale = {
  prev?: string;
  next?: string;
  jumpTo?: string;
  page?: string;
  itemsPerPage?: (n: number) => string;
};

export const zh: PaginationLocale = {
  prev: '上一页',
  next: '下一页',
  jumpTo: '跳到',
  page: '页',
  itemsPerPage: (n: number) => `${n} / 页`,
};

export const en: PaginationLocale = {
  prev: 'Previous',
  next: 'Next',
  jumpTo: 'Jump to',
  page: '',
  itemsPerPage: (n: number) => `${n} / page`,
};

export const defaultLocale: PaginationLocale = zh;
