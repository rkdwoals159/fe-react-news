import Navigation from "@/components/MainContent/Navigation/Navigation";
import GridView from "@/components/MainContent/NewsView/GridView";
import { SubscriptionProvider } from "@/store/SubscriptionProvider";

export default function MainContent() {
  return (
    <SubscriptionProvider>
      <section
        className="mt-[30px]"
        aria-label="언론사별 기사들을 확인하는 영역"
      >
        <Navigation />
        <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
          <GridView />
        </div>
      </section>
    </SubscriptionProvider>
  );
}
