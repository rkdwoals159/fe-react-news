import getDate from "../../utils/getDate";

export default function Date() {
  const { yyyy, mm, dd, day } = getDate();

  return (
    <time
      className="display-medium14 text-default"
      dateTime={`${yyyy}-${mm}-${dd}`}
    >
      {`${yyyy}. ${mm}. ${dd}. ${day}`}
    </time>
  );
}
