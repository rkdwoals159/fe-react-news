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
}: {
  subscriptionTab: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [gridItems, setGridItems] = useState<GridViewItem[][]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const { subscription } = useSubscription();

  const filteredGridItems = useMemo(() => {
    return subscriptionTab
      ? convertTo2DArr(
          gridItems.flat().filter(({ press }) => subscription.includes(press)),
          GRID_SIZE
        )
      : gridItems;
  }, [gridItems, subscription, subscriptionTab]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchGetApi<GridViewItem[][]>("/api/news/gridView");
        setGridItems(data);
        setTotalPage(data.length - 1);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    })();
  }, []);

  return (
    <>
      <section className="w-full" aria-label="언론사 목록">
        <ul className="grid w-full max-w-[930px] max-h-[388px] grid-cols-2 border-t border-l border-border-default bg-surface-default min-[1020px]:grid-cols-6">
          {filteredGridItems[currentPage]?.map(({ press, logo }, idx) => (
            <GridCard key={`${press}-${idx}`} name={press} logoUrl={logo} />
          ))}
        </ul>
      </section>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
