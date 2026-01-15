import SubscriptionTab from "@/components/main-content/navigation/SubscriptionTab";
import ViewTab from "@/components/main-content/navigation/ViewTab";

export default function Navigation({
  setSubscriptionTab,
  subscriptionTab,
}: {
  subscriptionTab: boolean;
  setSubscriptionTab: (isSubscriptionTab: boolean) => void;
}) {
  return (
    <div className="flex items-end justify-between gap-[14px] px-[2px]">
      <SubscriptionTab
        setSubscriptionTab={setSubscriptionTab}
        subscriptionTab={subscriptionTab}
      />
      <ViewTab />
    </div>
  );
}
