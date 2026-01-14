import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { worker } from "@/utils/mocks/browser";
import "@/styles/index.css";
import App from "@/App.tsx";

async function enableMocking() {
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
