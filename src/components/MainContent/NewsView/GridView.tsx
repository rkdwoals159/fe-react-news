import GridCard from "@/components/MainContent/NewsView/GridCard";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import type { GridViewItem } from "@/types/api.type";

export default function GridView() {
  const [currentPage, setCurrentPage] = useState(0);
  const [gridItems, setGridItems] = useState<GridViewItem[][]>([]);
  const [totalPage, setTotalPage] = useState(0);

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
      setTotalPage(data.length - 1);
    });
  }, []);
  return (
    <>
      <section className="w-full" aria-label="언론사 목록">
        <ul className="grid w-full max-w-[930px] max-h-[388px] grid-cols-2 border-t border-l border-border-default bg-surface-default min-[1020px]:grid-cols-6">
          {gridItems[currentPage]?.map(({ press, logo }, idx) => (
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
