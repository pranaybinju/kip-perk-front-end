import { usePagination, useTable } from "react-table";
import Pagination from "./Pagination";
import { ControlledTableProps } from "./ITable";
import EmptyPlaceholder from "../../assets/undraw_empty_xct9.svg";
import Image from "../Image";
import Container from "../Container";
import Text from "../Text";
const Table = <T extends {}>({ columns, data }: ControlledTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,

    nextPage,
    previousPage,

    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <div className="flex flex-col w-full">
      <div className="h-80 w-full overflow-auto">
        <table
          className="min-w-full relative divide-y divide-gray-200"
          {...getTableProps()}
        >
          {page.length === 0 ? (
            <Container className="flex flex-1 my-auto flex-col justify-center items-center">
              <Image
                alt="empty-img"
                className="h-45 md:h-xl w-xl  object-contain"
                src={EmptyPlaceholder}
              />
              <Text className="text-primary font-md">
                {"No Claims Present!"}
              </Text>
            </Container>
          ) : (
            <>
              <thead className="sticky">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-24"
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
            </>
          )}
        </table>
      </div>
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
