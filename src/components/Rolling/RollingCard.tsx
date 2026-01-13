import { useState } from "react";
import type { RollingItem } from "@/types/api.type";

type RollingCardProps = {
  rollingData: RollingItem[];
};

export default function RollingCard({ rollingData }: RollingCardProps) {
  const [isPaused] = useState(false);
  return (
    <a
      className="group flex min-h-[56px] w-full min-w-0 items-center gap-3 border border-border-default bg-surface-alt px-[18px] py-4 text-left"
      href={rollingData[0]?.link}
      rel="noreferrer"
      target="_blank"
    >
      <span className="display-bold14 text-strong shrink-0">
        {rollingData[0]?.press}
      </span>
      <span
        className={`display-medium16 min-w-0 flex-1 truncate text-bold ${
          isPaused
            ? "underline underline-offset-4"
            : "group-hover:underline group-hover:underline-offset-4"
        }`}
      >
        {rollingData[0]?.title}
      </span>
    </a>
  );
}
