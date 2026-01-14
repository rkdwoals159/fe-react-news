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

export type pressDataType = {
  logo: string;
  press: string;
  category: string;
  totalPage: string;
  time: string;
  mainTitle: string;
  mainLink: string;
  mainImg: string;
  relatedArticles: {
    title: string;
    link: string;
  }[];
  darkLogo: string;
};

export type GridViewItem = { logo: string; press: string };
