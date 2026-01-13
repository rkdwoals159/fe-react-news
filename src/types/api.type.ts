import type { Ref } from "react";

export type RollingItem = {
  title: string;
  link: string;
  press: string;
};
export type RollingCardHandle = {
  roll: () => void;
};

export type RollingCardProps = {
  rollingData: RollingItem[];
  offset?: number;
  ref?: Ref<RollingCardHandle>;
};
