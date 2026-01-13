import SubscriptionTab from "@/components/MainContent/Navigation/SubscriptionTab";
import ViewTab from "@/components/MainContent/Navigation/ViewTab";

export default function Navigation() {
  return (
    <div className="flex items-end justify-between gap-[14px] px-[2px]">
      <SubscriptionTab />
      <ViewTab />
    </div>
  );
}
