import ListCategoryBar from "@/components/main-content/news-view/list/ListCategoryBar";
import ListNewsMain from "@/components/main-content/news-view/list/ListNewsMain";
import Pagination from "@/components/main-content/news-view/Pagination";

export default function ListView() {
  return (
    <div>
      <ListCategoryBar />
      <ListNewsMain />
      <Pagination totalPage={1} currentPage={1} setCurrentPage={() => {}} />
    </div>
  );
}
