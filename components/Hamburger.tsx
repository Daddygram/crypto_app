"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Hamburger = () => {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((prevState) => !prevState)
    }

  return (
    <nav className='bg-black-100 flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white md:hidden '>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
          <Link href="/" >
            <Image src="/jsm-logo.svg" alt='logo' width={55} height={40} />
          </Link>

          <div className='inline-block relative'>
            <Image src="hamburger-menu.svg" alt='hamburger menu' width={30} height={30} onClick={toggleOpen} className='md:hidden' />

            <ul className={`hidden absolute top-full right-0 bg-black-100 w-[200px] max-h-0 overflow-hidden flex-col gap-x-3 md:gap-x-10 ${open ? 'flex-center max-h-[300px] rounded-md gap-2 p-2' : ''} `}>
                <li className='body-text !font-normal block'>
                    <Link href="#home" className='p-3 text-center text-2xl' >Home</Link>
                </li>
                <li className='body-text !font-normal block'>
                    <Link href="#market" className='p-3 text-center text-2xl' >Market</Link>
                </li>
                <li className='body-text !font-normal block'>
                    <Link href="#about" className='p-3 text-center text-2xl' >About</Link>
                </li>
                <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="#join-us" className='p-3 text-center text-2xl' >Join Us</Link>
                </li>
            </ul>
          </div>

          
        </div>
    </nav>
  )
}

export default Hamburger