import leftButtonIcon from "@/assets/icons/LeftButton.svg";
import rightButtonIcon from "@/assets/icons/RightButton.svg";

export default function Pagination() {
  return (
    <>
      <button
        className="absolute left-[-80px] top-1/2 grid h-[120px] w-14 -translate-y-1/2 place-items-center max-[640px]:left-[-22px] max-[640px]:w-11"
        type="button"
        aria-label="이전"
      >
        <img
          className="h-10 w-6 opacity-50 hover:opacity-85"
          src={leftButtonIcon}
          alt=""
        />
      </button>
      <button
        className="absolute right-[-80px] top-1/2 grid h-[120px] w-14 -translate-y-1/2 place-items-center max-[640px]:right-[-22px] max-[640px]:w-11"
        type="button"
        aria-label="다음"
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
