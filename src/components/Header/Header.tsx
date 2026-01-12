import Logo from "@/components/Header/Logo";
import Date from "@/components/Header/Date";

export default function Header() {
  return (
    <header className="bg-surface-default">
      <div className="mx-auto flex h-[88px] w-[930px] max-w-[calc(100%-48px)] items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-[10px]">
          <Date />
        </div>
      </div>
    </header>
  );
}
