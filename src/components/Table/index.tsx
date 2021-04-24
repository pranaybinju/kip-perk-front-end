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
import Pagination from "./Pagination";
import { ControlledTableProps } from "./ITable";

//TO BE UPDATED AS WE PROCEED
const Table = <T extends {}>({
  columns,
  data,
}: // tableHeading,
// pageSize: initialPageSize,
// pageCount: controlledPageCount,
// onRowClick,
// emptyPlaceholder,
// fetchData,
// isLoading,
ControlledTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );
  return (
    <div className="flex flex-col w-3xl">
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
          {page.map((row: any, i) => {
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
      <Pagination
        pageOptions={pageOptions}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default Table;
