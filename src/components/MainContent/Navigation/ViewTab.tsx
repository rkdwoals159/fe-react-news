import { GridIconView, ListViewIcon } from "@/utils/icons";

export default function ViewTab() {
  return (
    <div className="flex items-center gap-[10px]" aria-label="보기 전환">
      <button
        className="grid h-9 w-9 place-items-center rounded-[10px]  text-bold"
        type="button"
        aria-label="리스트 보기"
      >
        <ListViewIcon color="currentColor" />
      </button>
      <button
        className="grid h-9 w-9 place-items-center rounded-[10px]  text-bold text-point"
        type="button"
        aria-label="그리드 보기"
      >
        <GridIconView color="currentColor" />
      </button>
    </div>
  );
}
