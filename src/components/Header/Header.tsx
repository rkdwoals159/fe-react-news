import Logo from "@/components/Header/Logo";
import Date from "@/components/Header/Date";
import Container from "@/components/Layout/Container";

export default function Header() {
  return (
    <header className="bg-surface-default">
      <Container className="flex h-[88px] items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-[10px]">
          <Date />
        </div>
      </Container>
    </header>
  );
}
