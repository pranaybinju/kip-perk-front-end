import { FcNext, FcPrevious } from "react-icons/fc";
import IconButton from "../IconButton";
import { PaginationProps } from "./ITable";

const Pagination = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
}: PaginationProps) => {
  console.log(canPreviousPage);
  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <IconButton
              onClick={previousPage}
              disabled={!canPreviousPage}
              className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 ${
                !canPreviousPage ? "opacity-30 " : ""
              } `}
              icon={<FcPrevious />}
            ></IconButton>
          </li>

          <li>
            <IconButton
              onClick={nextPage}
              disabled={!canNextPage}
              className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500  ${
                !canNextPage ? "opacity-30 " : ""
              } `}
              icon={<FcNext />}
            ></IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
