export {};

declare global {
  interface IBaseQuery {
    q?: string;
    page?: number;
    pageSize?: number;
  }

  interface IBaseResponse<T = any> {
    data: T;
    total: number;
    page: number;
    pageSize: number;
  }

  type List<T = any> = T[];

  type ItemInfo<T = string> = {
    label: string;
    key: T;
  };
}
