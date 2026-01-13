import Container from "@/components/Layout/Container";
import RollingCard from "@/components/Rolling/RollingCard";

const rollingItems = [
  {
    source: "-",
    title: "불러오는 중...",
  },
  {
    source: "-",
    title: "불러오는 중...",
  },
];

export default function Rolling() {
  return (
    <Container>
      <section
        className="mt-[26px] grid w-full grid-cols-1 gap-5 min-[1020px]:grid-cols-2"
        aria-label="최신 뉴스 자동 롤링"
      >
        {rollingItems.map((item, index) => (
          <RollingCard
            key={`${item.source}-${index}`}
            source={item.source}
            title={item.title}
          />
        ))}
      </section>
    </Container>
  );
}
