import leftButtonIcon from "@/assets/icons/LeftButton.svg";
import rightButtonIcon from "@/assets/icons/RightButton.svg";

export default function Pagination({
  totalPage,
  currentPage,
  setCurrentPage,
}: {
  totalPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  function handlePageChange(page: number) {
    if (page < 0) return;
    if (page > totalPage) return;
    setCurrentPage(page);
  }
  return (
    <>
      <button
        className={`${!currentPage && "hidden"} absolute left-[-80px] top-1/2 grid h-[120px] w-14 -translate-y-1/2 place-items-center max-[640px]:left-[-22px] max-[640px]:w-11`}
        type="button"
        aria-label="이전"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img
          className="h-10 w-6 opacity-50 hover:opacity-85"
          src={leftButtonIcon}
          alt=""
        />
      </button>
      <button
        className={`${currentPage === totalPage && "hidden"} absolute right-[-80px] top-1/2 grid h-[120px] w-14 -translate-y-1/2 place-items-center max-[640px]:right-[-22px] max-[640px]:w-11`}
        type="button"
        aria-label="다음"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img
          className="h-10 w-6 opacity-50 hover:opacity-85"
          src={rightButtonIcon}
          alt=""
        />
      </button>
    </>
  );
}
