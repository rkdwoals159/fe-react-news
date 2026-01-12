import HeaderIcon from '../../utils/icons'

export default function Logo() {
    return (
      <div className="flex items-center gap-2">
        <HeaderIcon color="#4362D0" />
        <span className="display-bold24 text-strong">뉴스스탠드</span>
      </div>
    )
  }