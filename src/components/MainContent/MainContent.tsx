import Navigation from "@/components/MainContent/Navigation/Navigation";
import GridView from "@/components/MainContent/NewsView/GridView";
import Pagination from "@/components/MainContent/NewsView/Pagination";
import { useState } from "react";

export default function MainContent() {
  const [gridCurrentPage] = useState(0);
  return (
    <section className="mt-[30px]" aria-label="언론사별 기사들을 확인하는 영역">
      <Navigation />
      <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
        <GridView currentPage={gridCurrentPage} />
        <Pagination />
      </div>
    </section>
  );
}
