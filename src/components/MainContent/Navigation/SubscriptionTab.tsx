export default function SubscriptionTab() {
  return (
    <nav className="flex items-center gap-[18px]" aria-label="언론사 탭">
      <button
        className="selected-bold16 text-strong px-0 py-[10px]"
        type="button"
      >
        전체 언론사
      </button>
      <button
        className="display-medium16 text-default px-0 py-[10px]"
        type="button"
      >
        내가 구독한 언론사
        <span className="display-bold12 ml-2 inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-surface-brand-alt px-[7px] text-white-default">
          0
        </span>
      </button>
    </nav>
  );
}
