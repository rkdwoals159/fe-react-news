import { http, HttpResponse } from "msw";
import pressData from "@/../public/mocks/pressData.json";
import {
  ROLL_COUNT,
  NEWS_PER_ROLL,
  GRID_COLLUMN_COUNT,
  GRID_ROW_COUNT,
} from "@/utils/constants";
import type { GridViewItem, pressDataType } from "@/types/api.type";

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
    const GRID_SIZE = GRID_COLLUMN_COUNT * GRID_ROW_COUNT;
    const gridViewItems = (pressData as pressDataType[]).reduce<
      GridViewItem[][]
    >((acc, cur, idx) => {
      if (idx % GRID_SIZE === 0) acc.push([]);
      acc[acc.length - 1].push({
        logo: cur.logo,
        press: cur.press,
      });
      return acc;
    }, []);
    return HttpResponse.json(gridViewItems);
  }),
];
