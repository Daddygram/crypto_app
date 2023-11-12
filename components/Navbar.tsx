import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
          <Link href="/" >
            <Image src="/jsm-logo.svg" alt='logo' width={55} height={40} />
          </Link>

          <Image src="hamburger-menu.svg" alt='hamburger menu' width={30} height={30} className='block md:hidden' />

          <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
            <li className='body-text !font-normal'>
              <Link href="#home" >Home</Link>
            </li>
            <li className='body-text !font-normal'>
              <Link href="#market" >Market</Link>
            </li>
            <li className='body-text !font-normal'>
              <Link href="#about" >About</Link>
            </li>
            <li className='body-text text-gradient_blue-purple !font-bold'>
              <Link href="#join-us" >Join Us</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar