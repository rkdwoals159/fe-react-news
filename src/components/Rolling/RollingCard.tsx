import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { RollingCardProps } from "@/types/api.type";
import { NEWS_PER_ROLL, ROLL_ANIMATION_DURATION } from "@/utils/constants";

export default function RollingCard({
  rollingData,
  offset = 0,
  ref,
}: RollingCardProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [rollIdx, setRollIdx] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const rollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rollTimeoutRef.current) {
        window.clearTimeout(rollTimeoutRef.current);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    roll: () => {
      if (isPaused) return;
      setTimeout(() => {
        const mod = Math.max(1, Math.min(NEWS_PER_ROLL, rollingData.length));
        setIsRolling(true);
        setRollIdx((prev) => (prev + 1) % mod);
        if (rollTimeoutRef.current) {
          window.clearTimeout(rollTimeoutRef.current);
        }
        rollTimeoutRef.current = window.setTimeout(() => {
          setIsRolling(false);
        }, ROLL_ANIMATION_DURATION);
      }, offset);
    },
  }));

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  return (
    <a
      className="group flex min-h-[56px] w-full min-w-0 items-center gap-3 border border-border-default bg-surface-alt px-[18px] py-4 text-left"
      href={rollingData[rollIdx]?.link}
      rel="noreferrer"
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="display-bold14 text-strong shrink-0">
        {rollingData[rollIdx]?.press}
      </span>
      <span
        className={`display-medium16 min-w-0 flex-1 truncate text-bold transition-[transform,opacity] duration-[280ms] ease ${
          isPaused
            ? "underline underline-offset-4"
            : "group-hover:underline group-hover:underline-offset-4"
        } ${isRolling ? "translate-y-2 opacity-20" : "translate-y-0 opacity-100"}`}
      >
        {rollingData[rollIdx]?.title}
      </span>
    </a>
  );
}
