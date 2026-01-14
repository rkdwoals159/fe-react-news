import SubscriptionTab from "@/components/MainContent/Navigation/SubscriptionTab";
import ViewTab from "@/components/MainContent/Navigation/ViewTab";

export default function Navigation({
  setSubscribtionTab,
  subscribtionTab,
}: {
  subscribtionTab: boolean;
  setSubscribtionTab: (isSubscribtionTab: boolean) => void;
}) {
  return (
    <div className="flex items-end justify-between gap-[14px] px-[2px]">
      <SubscriptionTab
        setSubscribtionTab={setSubscribtionTab}
        subscribtionTab={subscribtionTab}
      />
      <ViewTab />
    </div>
  );
}
