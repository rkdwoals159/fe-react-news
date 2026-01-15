import Logo from "@/components/header/Logo";
import Date from "@/components/header/Date";

export default function Header() {
  return (
    <header className="bg-surface-default">
      <div className="flex h-[88px] items-center justify-between gap-4">
        <Logo />
        <Date />
      </div>
    </header>
  );
}
