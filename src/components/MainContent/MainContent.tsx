import Navigation from "@/components/MainContent/Navigation/Navigation";
import GridView from "@/components/MainContent/NewsView/GridView";
import { SubscriptionProvider } from "@/store/SubscriptionProvider";
import { useState } from "react";

export default function MainContent() {
  const [subscribtionTab, setSubscribtionTab] = useState(false);
  return (
    <SubscriptionProvider>
      <section
        className="mt-[30px]"
        aria-label="언론사별 기사들을 확인하는 영역"
      >
        <Navigation
          setSubscribtionTab={setSubscribtionTab}
          subscribtionTab={subscribtionTab}
        />
        <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
          <GridView subscribtionTab={subscribtionTab} />
        </div>
      </section>
    </SubscriptionProvider>
  );
}
