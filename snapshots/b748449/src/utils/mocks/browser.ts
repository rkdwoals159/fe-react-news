import { setupWorker } from "msw/browser";
import { handlers } from "@/utils/mocks/handler";
export const worker = setupWorker(...handlers);
