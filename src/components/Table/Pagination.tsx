import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import IconButton from "../IconButton";
import { PaginationProps } from "./ITable";
const Pagination = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
}: PaginationProps) => {
  return (
    <div className="p-4 flex justify-end">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <IconButton
              onClick={previousPage}
              disabled={!canPreviousPage}
              className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 ${
                !canPreviousPage ? "opacity-30 " : ""
              } `}
              icon={<ChevronLeftIcon className="h-5 w-5" />}
            ></IconButton>
          </li>

          <li>
            <IconButton
              onClick={nextPage}
              disabled={!canNextPage}
              className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500  ${
                !canNextPage ? "opacity-30 " : ""
              } `}
              icon={<ChevronRightIcon className="h-5 w-5" />}
            ></IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
