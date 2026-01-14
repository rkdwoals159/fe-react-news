import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { worker } from "@/utils/mocks/browser";
import "@/styles/index.css";
import App from "@/App.tsx";

async function enableMocking() {
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
