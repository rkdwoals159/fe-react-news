import { useState } from "react";

export default function useNavigation() {
  const [subscriptionTab, setSubscriptionTab] = useState(false);
  const [viewTab, setViewTab] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(0);

  const handleSubscriptionTabChange = (isSubscriptionTab: boolean) => {
    setSubscriptionTab(isSubscriptionTab);
    setCurrentPage(0);
  };
  const handleViewTabChange = (viewTab: "grid" | "list") => {
    setViewTab(viewTab);
    setCurrentPage(0);
  };
  return {
    subscriptionTab,
    viewTab,
    currentPage,
    setCurrentPage,
    handleSubscriptionTabChange,
    handleViewTabChange,
  };
}
