import { useState } from "react";
import { SubscriptionContext } from "./SubscriptionContext";

// 컨텍스트 제공
export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subscription, setSubscription] = useState<string[]>([]);
  const subscribe = (subscription: string) =>
    setSubscription((prev) => [...prev, subscription]);
  const unsubscribe = (subscription: string) =>
    setSubscription((prev) => prev.filter((s) => s !== subscription));

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        subscribe,
        unsubscribe,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}
