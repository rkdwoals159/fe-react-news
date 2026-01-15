import ListNewsHeader from "@/components/main-content/news-view/list/ListNewsHeader";
import ListMainArticle from "@/components/main-content/news-view/list/ListMainArticle";
import ListRelatedArticles from "@/components/main-content/news-view/list/ListRelatedArticles";

export default function ListViewNewsMain() {
  return (
    <div>
      <ListNewsHeader />
      <ListMainArticle />
      <ListRelatedArticles />
    </div>
  );
}
