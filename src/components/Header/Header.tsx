import Logo from './Logo'
import Date from './Date'

export default function Header() {
  return (
    <div className='flex justify-between'>
        <Logo />
        <Date />
    </div>
  )
}