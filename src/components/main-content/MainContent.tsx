import Navigation from "@/components/main-content/navigation/Navigation";
import GridView from "@/components/main-content/news-view/GridView";
import ListView from "@/components/main-content/news-view/ListView";
import { SubscriptionProvider } from "@/store/SubscriptionProvider";
import useNavigation from "@/hooks/useNavigation";

export default function MainContent() {
  const {
    subscriptionTab,
    viewTab,
    currentPage,
    setCurrentPage,
    handleSubscriptionTabChange,
    handleViewTabChange,
  } = useNavigation();

  return (
    <SubscriptionProvider>
      <section
        className="mt-[30px]"
        aria-label="언론사별 기사들을 확인하는 영역"
      >
        <Navigation
          setSubscriptionTab={handleSubscriptionTabChange}
          subscriptionTab={subscriptionTab}
          viewTab={viewTab}
          setViewTab={handleViewTabChange}
        />
        <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
          {viewTab === "grid" ? (
            <GridView
              subscriptionTab={subscriptionTab}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <ListView />
          )}
        </div>
      </section>
    </SubscriptionProvider>
  );
}
