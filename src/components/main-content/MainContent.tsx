import Navigation from "@/components/main-content/navigation/Navigation";
import GridView from "@/components/main-content/news-view/GridView";
import { SubscriptionProvider } from "@/store/SubscriptionProvider";
import { useState } from "react";

export default function MainContent() {
  const [subscriptionTab, setSubscriptionTab] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const handleSubscriptionTabChange = (isSubscriptionTab: boolean) => {
    setSubscriptionTab(isSubscriptionTab);
    setCurrentPage(0);
  };
  return (
    <SubscriptionProvider>
      <section
        className="mt-[30px]"
        aria-label="언론사별 기사들을 확인하는 영역"
      >
        <Navigation
          setSubscriptionTab={handleSubscriptionTabChange}
          subscriptionTab={subscriptionTab}
        />
        <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
          <GridView
            subscriptionTab={subscriptionTab}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </SubscriptionProvider>
  );
}
