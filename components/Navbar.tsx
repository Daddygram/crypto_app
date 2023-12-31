import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className='bg-black-100 hidden fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white md:flex-center '>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
          <Link href="#" passHref>
            <Image src="/jsm-logo.svg" alt='logo' width={55} height={40} />
          </Link>

          <ul className='flex-center gap-x-3 md:gap-x-10'>
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