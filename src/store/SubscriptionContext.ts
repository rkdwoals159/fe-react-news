import { createContext, useContext } from "react";

type SubscriptionContextType = {
  subscription: string[];
  subscribe: (subscription: string) => void;
  unsubscribe: (subscription: string) => void;
};

export const SubscriptionContext = createContext<SubscriptionContextType>({
  subscription: [],
  subscribe: () => {},
  unsubscribe: () => {},
});

export function useSubscription() {
  return useContext(SubscriptionContext);
}
