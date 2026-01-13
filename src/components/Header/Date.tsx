import getDate from "@/utils/getDate";
import { useState } from "react";

export default function Date() {
  const [date] = useState(() => getDate());

  return (
    <time
      className="display-medium14 text-default"
      dateTime={`${date.yyyy}-${date.mm}-${date.dd}`}
    >
      {`${date.yyyy}. ${date.mm}. ${date.dd}. ${date.day}`}
    </time>
  );
}
