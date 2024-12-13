export interface GetItemsQuery {
  page?: number;
  pageSize?: number;
  order?: 'recent' | 'favorite';
  keyword?: string;
}
