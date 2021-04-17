import {
  Column,
  Row,
  HeaderGroup,
  TablePropGetter,
  TableBodyPropGetter,
} from "react-table";
declare module "react-table" {
  export interface TableOptions<D extends object>
    extends UsePaginationOptions<D>,
      UseFiltersOptions<D> {
    selectedFlatRows?: Row<D>[];
    manualSortBy?: boolean;
  }

  export interface TableInstance<D extends object = {}>
    extends UsePaginationInstanceProps<D> {
    pageCount: number;
  }

  export interface TableState<D extends object = {}>
    extends UsePaginationState<D> {
    pageSize: number;
    pageIndex: number;
    //  sortBy?: SortBy[];
    selectedRowIds?: number[];
  }

  export interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {
    canSort: boolean;
  }
}
export type TableProps<D extends object = {}> = {
  data: any;
  pageSize?: number;
  tableHeading?: React.ReactNode;
  columns: Column<D>[];
  onRowClick?: (row: Row) => void;
  showPagination?: boolean;
  emptyPlaceholder?: React.ReactNode;
  isLoading?: boolean;
};
export type ControlledTableProps<D extends object = {}> = TableProps<D> & {
  fetchData: (data: {
    pageIndex: number;
    pageSize: number;
    sortBy?: { id: string; desc: true }[];
  }) => void;
  pageCount: number;
};
