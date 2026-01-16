import { useCallback, useMemo, useState } from "react";
import { SubscriptionContext } from "./SubscriptionContext";

// 컨텍스트 제공
export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subscription, setSubscription] = useState<string[]>([]);
  const subscribe = useCallback((nextSubscription: string) => {
    setSubscription((prev) => [...prev, nextSubscription]);
  }, []);
  const unsubscribe = useCallback((nextSubscription: string) => {
    setSubscription((prev) => prev.filter((s) => s !== nextSubscription));
  }, []);

  const value = useMemo(
    () => ({
      subscription,
      subscribe,
      unsubscribe,
    }),
    [subscription, subscribe, unsubscribe]
  );

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
