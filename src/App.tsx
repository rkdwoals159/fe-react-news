import Header from "@/components/header/Header";
import Rolling from "@/components/rolling/Rolling";
import MainContent from "@/components/main-content/MainContent";

function App() {
  return (
    <div
      className="mx-auto w-[930px] max-w-[calc(100%-48px)]"
      aria-label="Main Container"
    >
      <Header />
      <Rolling />
      <MainContent />
    </div>
  );
}

export default App;
