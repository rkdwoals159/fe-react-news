import GridCard from "@/components/MainContent/NewsView/GridCard";

const gridItems = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  name: `언론사 ${index + 1}`,
}));

export default function GridView() {
  return (
    <section className="w-full" aria-label="언론사 목록">
      <ul className="grid w-full max-w-[930px] max-h-[388px] grid-cols-2 border-t border-l border-border-default bg-surface-default min-[1020px]:grid-cols-6">
        {gridItems.map((item) => (
          <GridCard key={item.id} name={item.name} />
        ))}
      </ul>
    </section>
  );
}
