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
    <section
      className="mt-[26px] grid w-full grid-cols-1 gap-5 min-[1020px]:grid-cols-2"
      aria-label="최신 뉴스 자동 롤링"
    >
      <RollingCard
        source={rollingItems[0].source}
        title={rollingItems[0].title}
      />
      <RollingCard
        source={rollingItems[1].source}
        title={rollingItems[1].title}
      />
    </section>
  );
}
