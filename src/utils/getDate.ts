import { DAY_NAMES } from "./constants";

export default function getDate() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const day = DAY_NAMES[now.getDay()];
  return { yyyy, mm, dd, day };
}
