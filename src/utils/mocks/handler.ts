import { http, HttpResponse } from "msw";
import pressData from "@/../public/mocks/pressData.json";
import { ROLL_COUNT, NEWS_PER_ROLL, GRID_SIZE } from "@/utils/constants";
import type { GridViewItem, pressDataType } from "@/types/api.type";
import convertTo2DArr from "../convertTo2DArr";

export const handlers = [
  http.get("/api/news/rolling", () => {
    const rollingItems = Array.from({ length: ROLL_COUNT }, (_, index) => {
      const start = index * NEWS_PER_ROLL;
      const end = start + NEWS_PER_ROLL;
      return (pressData as pressDataType[]).slice(start, end).map((item) => ({
        title: item.mainTitle,
        link: item.mainLink,
        press: item.press,
      }));
    });

    return HttpResponse.json(rollingItems);
  }),
  http.get("/api/news/gridView", () => {
    const gridViewItems: GridViewItem[][] = convertTo2DArr(
      (pressData as pressDataType[]).map((item) => ({
        logo: item.logo,
        press: item.press,
      })),
      GRID_SIZE
    );
    return HttpResponse.json(gridViewItems);
  }),
];
