import { useState } from "react";

type RollingCardProps = {
  source: string;
  title: string;
  href?: string;
};

export default function RollingCard({
  source,
  title,
  href = "#",
}: RollingCardProps) {
  const [isPaused] = useState(false);
  return (
    <a
      className="group flex min-h-[56px] w-full min-w-0 items-center gap-3 border border-border-default bg-surface-alt px-[18px] py-4 text-left"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <span className="display-bold14 text-strong shrink-0">{source}</span>
      <span
        className={`display-medium16 min-w-0 flex-1 truncate text-bold ${
          isPaused
            ? "underline underline-offset-4"
            : "group-hover:underline group-hover:underline-offset-4"
        }`}
      >
        {title}
      </span>
    </a>
  );
}
