import { FcNext, FcPrevious } from "react-icons/fc";
import { PaginationProps } from "./ITable";

const Pagination = ({
  gotoPage,
  previousPage,
  canPreviousPage,
  nextPage,
  pageCount,
  canNextPage,
}: PaginationProps) => {
  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li onClick={previousPage}>
            <button className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
              <span className="fas fa-chevron-left -ml-px">
                <FcPrevious />
              </span>
            </button>
          </li>

          <li>
            <button className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
              <span className="fas fa-chevron-right -mr-px">
                <FcNext />
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
