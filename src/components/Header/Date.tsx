export default function Date() {
  const now = new globalThis.Date()
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const day = dayNames[now.getDay()]

  return (
    <time className="display-medium14 text-default" dateTime={`${yyyy}-${mm}-${dd}`}>
      {`${yyyy}. ${mm}. ${dd}. ${day}`}
    </time>
  )
}
