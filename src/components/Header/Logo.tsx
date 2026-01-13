import { HeaderIcon } from "@/utils/icons";

export default function Logo() {
  return (
    <h1 className="m-0" aria-label="뉴스스탠드">
      <a
        className="inline-flex items-center gap-3 rounded-[10px] px-[6px] py-2 text-strong hover:bg-surface-alt"
        href="/"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center text-point">
          <HeaderIcon color="currentColor" />
        </span>
        <span className="display-bold24 text-strong">뉴스스탠드</span>
      </a>
    </h1>
  );
}
