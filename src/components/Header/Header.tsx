import Logo from "@/components/Header/Logo";
import Date from "@/components/Header/Date";

export default function Header() {
  return (
    <header className="bg-surface-default">
      <div className="flex h-[88px] items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-[10px]">
          <Date />
        </div>
      </div>
    </header>
  );
}
