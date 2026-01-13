import { useState, useEffect } from "react";
import RollingCard from "@/components/Rolling/RollingCard";
import type { RollingItem } from "@/types/api.type";

export default function Rolling() {
  const [rollingItems, setRollingItems] = useState<RollingItem[][]>([]);

  useEffect(() => {
    fetch("/api/news/rolling", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      const data = await res.json();
      setRollingItems(data);
    });
  }, []);

  return (
    <section
      className="mt-[26px] grid w-full grid-cols-1 gap-5 min-[1020px]:grid-cols-2"
      aria-label="최신 뉴스 자동 롤링"
    >
      <RollingCard rollingData={rollingItems[0] || []} />
      <RollingCard rollingData={rollingItems[1] || []} />
    </section>
  );
}

// TODO: 배열 슬라이스 함수 모듈//화
// TODO: fetch함수 모듈화
// TODO: 여기는 state만 관리
