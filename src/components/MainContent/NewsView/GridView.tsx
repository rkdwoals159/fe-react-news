import GridCard from "@/components/MainContent/NewsView/GridCard";
import { useState, useEffect } from "react";
import type { GridViewItem } from "@/types/api.type";

export default function GridView({ currentPage }: { currentPage: number }) {
  const [gridItems, setGridItems] = useState<GridViewItem[][]>([]);

  useEffect(() => {
    fetch("/api/news/gridView", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setGridItems(data);
    });
  }, []);

  return (
    <section className="w-full" aria-label="언론사 목록">
      <ul className="grid w-full max-w-[930px] max-h-[388px] grid-cols-2 border-t border-l border-border-default bg-surface-default min-[1020px]:grid-cols-6">
        {gridItems[currentPage]?.map(({ press, logo }, idx) => (
          <GridCard key={`${press}-${idx}`} name={press} logoUrl={logo} />
        ))}
      </ul>
    </section>
  );
}
