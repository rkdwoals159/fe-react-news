import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <div className={`mx-auto w-[930px] max-w-[calc(100%-48px)] ${className}`}>
      {children}
    </div>
  );
}
