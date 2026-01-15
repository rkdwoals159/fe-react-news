import { GridIconView, ListViewIcon } from "@/utils/icons";

export default function ViewTab({
  viewTab,
  setViewTab,
}: {
  viewTab: "grid" | "list";
  setViewTab: (viewTab: "grid" | "list") => void;
}) {
  const handleClick = (viewTab: "grid" | "list") => {
    setViewTab(viewTab);
  };
  return (
    <div className="flex items-center gap-[10px]" aria-label="보기 전환">
      <button
        className={`grid h-9 w-9 place-items-center rounded-[10px]  text-bold ${viewTab === "list" ? "text-point" : "text-default"}`}
        type="button"
        aria-label="리스트 보기"
        onClick={() => handleClick("list")}
      >
        <ListViewIcon color="currentColor" />
      </button>
      <button
        className={`grid h-9 w-9 place-items-center rounded-[10px]  text-bold ${viewTab === "grid" ? "text-point" : "text-default"}`}
        type="button"
        aria-label="그리드 보기"
        onClick={() => handleClick("grid")}
      >
        <GridIconView color="currentColor" />
      </button>
    </div>
  );
}
