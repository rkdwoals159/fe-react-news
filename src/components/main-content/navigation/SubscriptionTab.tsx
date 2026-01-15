import { useSubscription } from "@/store/SubscriptionContext";

export default function SubscriptionTab({
  setSubscriptionTab,
  subscriptionTab,
}: {
  setSubscriptionTab: (subscriptionTab: boolean) => void;
  subscriptionTab: boolean;
}) {
  const { subscription } = useSubscription();
  const handleClick = (isSubscriptionTab: boolean) => {
    setSubscriptionTab(isSubscriptionTab);
  };
  return (
    <nav
      className="flex items-center gap-[18px] h-[22px]"
      aria-label="언론사 탭"
    >
      <button
        className={`${subscriptionTab ? "display-medium16 text-default" : "selected-bold16 text-strong"} px-0 py-[10px] flex items-center`}
        type="button"
        onClick={() => handleClick(false)}
      >
        전체 언론사
      </button>
      <button
        className={`${!subscriptionTab ? "display-medium16 text-default" : "selected-bold16 text-strong"} px-0 py-[10px] flex items-center`}
        type="button"
        onClick={() => handleClick(true)}
      >
        내가 구독한 언론사
        <span className="display-bold12 ml-2 inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-surface-brand-alt px-[7px] text-white-default">
          {subscription.length}
        </span>
      </button>
    </nav>
  );
}
