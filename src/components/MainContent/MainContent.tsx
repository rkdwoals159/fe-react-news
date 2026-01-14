import Navigation from "@/components/MainContent/Navigation/Navigation";
import GridView from "@/components/MainContent/NewsView/GridView";

export default function MainContent() {
  return (
    <section className="mt-[30px]" aria-label="언론사별 기사들을 확인하는 영역">
      <Navigation />
      <div className="flex items-center justify-center mt-[18px] relative min-h-[430px] bg-surface-default">
        <GridView />
      </div>
    </section>
  );
}
