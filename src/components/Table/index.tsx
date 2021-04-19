import {
  useFlexLayout,
  usePagination,
  useTable,
  useSortBy,
  useRowSelect,
  Column,
  Row,
  HeaderGroup,
  TablePropGetter,
  TableBodyPropGetter,
} from "react-table";
import { ControlledTableProps } from "./ITable";

//TO BE UPDATED AS WE PROCEED
const Table = <T extends {}>({
  columns,
  data,

  tableHeading,
  pageCount: controlledPageCount,
  onRowClick,
  emptyPlaceholder,
  fetchData,
  isLoading,
}: ControlledTableProps<T>) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    getTableBodyProps,
    // //@ts-ignore
    // selectedFlatRows,
    // //@ts-ignore
    // page,
    // //@ts-ignore
    // canPreviousPage,
    // //@ts-ignore
    // canNextPage,
    // //@ts-ignore
    // pageOptions,
    // //@ts-ignore
    // nextPage,
    // //@ts-ignore
    // previousPage,
    // //@ts-ignore
    // setPageSize,
  } = useTable<T>(
    {
      columns,
      data,
      //   initialState: { pageIndex: 0 },
      // manualPagination: true,
      // manualSortBy: true,
      // pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="flex flex-col w-full">
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className="bg-white divide-y divide-gray-200"
          {...getTableBodyProps()}
        >
          {rows.map((row: any, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
