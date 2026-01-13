import { useState, useEffect, useRef } from "react";
import RollingCard from "@/components/Rolling/RollingCard";
import type { RollingCardHandle, RollingItem } from "@/types/api.type";
import { INTERVAL_TIME, OFFSET_TIME } from "@/utils/constants";

export default function Rolling() {
  const [rollingItems, setRollingItems] = useState<RollingItem[][]>([]);

  const rollingCardRef0 = useRef<RollingCardHandle>(null);
  const rollingCardRef1 = useRef<RollingCardHandle>(null);

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
    const intervalId = window.setInterval(() => {
      rollingCardRef0.current?.roll();
      rollingCardRef1.current?.roll();
    }, INTERVAL_TIME);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      className="mt-[26px] grid w-full grid-cols-1 gap-5 min-[1020px]:grid-cols-2"
      aria-label="최신 뉴스 자동 롤링"
    >
      <RollingCard ref={rollingCardRef0} rollingData={rollingItems[0] || []} />
      <RollingCard
        ref={rollingCardRef1}
        rollingData={rollingItems[1] || []}
        offset={OFFSET_TIME}
      />
    </section>
  );
}
