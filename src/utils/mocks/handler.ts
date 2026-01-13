import { http, HttpResponse } from "msw";
import pressData from "@/../public/mocks/pressData.json";
import { ROLL_COUNT, NEWS_PER_ROLL } from "@/utils/constants";

export const handlers = [
  http.get("/api/news/rolling", () => {
    const rollingItems = Array.from({ length: ROLL_COUNT }, (_, index) => {
      const start = index * NEWS_PER_ROLL;
      const end = start + NEWS_PER_ROLL;
      return pressData.slice(start, end).map((item) => ({
        title: item.mainTitle,
        link: item.mainLink,
        press: item.press,
      }));
    });

    return HttpResponse.json(rollingItems);
  }),
];
