import GridCard from "@/components/main-content/news-view/GridCard";
import Pagination from "./Pagination";
import { useState, useEffect, useMemo } from "react";
import type { GridViewItem } from "@/types/api.type";
import { useSubscription } from "@/store/SubscriptionContext";
import convertTo2DArr from "@/utils/convertTo2DArr";
import { GRID_SIZE } from "@/utils/constants";
import { fetchGetApi } from "@/api/fetcher";

export default function GridView({
  subscriptionTab,
  currentPage,
  setCurrentPage,
}: {
  subscriptionTab: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const [gridItems, setGridItems] = useState<GridViewItem[][]>([]);
  const { subscription } = useSubscription();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchGetApi<GridViewItem[][]>("/api/news/gridView");
        setGridItems(data);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    })();
  }, []);

  const filteredGridItems = useMemo(() => {
    return subscriptionTab
      ? convertTo2DArr(
          gridItems.flat().filter(({ press }) => subscription.includes(press)),
          GRID_SIZE
        )
      : gridItems;
  }, [gridItems, subscription, subscriptionTab]);

  return (
    <>
      <section className="w-full" aria-label="언론사 목록">
        <ul className="grid w-full max-w-[930px] max-h-[388px] grid-cols-2 border-t border-l border-border-default bg-surface-default min-[1020px]:grid-cols-6">
          {Array.from({ length: GRID_SIZE }, (_, index) => {
            if (filteredGridItems[currentPage]) {
              const nowPress = filteredGridItems[currentPage][index];
              return nowPress ? (
                <GridCard
                  isEmpty={false}
                  key={`${nowPress.press}-${index}`}
                  name={nowPress.press}
                  logoUrl={nowPress.logo}
                />
              ) : (
                <GridCard isEmpty={true} key={`empty-${index}`} />
              );
            }
          })}
        </ul>
      </section>
      <Pagination
        totalPage={filteredGridItems.length - 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
