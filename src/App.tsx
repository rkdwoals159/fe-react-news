import Header from "@/components/Header/Header";
import Rolling from "@/components/Rolling/Rolling";
import MainContent from "@/components/MainContent/MainContent";

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
