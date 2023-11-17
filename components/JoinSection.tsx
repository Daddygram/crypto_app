import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JoinSection = () => {
  return (
    <section id='join-us' className='flex-center my-28'>
        <div className='flex-center flex-col gap-6 text-center text-white relative'>
            <Image src="/bitcoin.png" width={75} height={75} alt='bitcoin' className='float absolute top-[100px] left-[-100px]' />
            <h2 className=' text-[96px] font-bold  uppercase leading-[1.25]'>Join us via <br /><span className='text-gradient_purple-blue mt-2'>Discord</span></h2>
            <p className='paragraph-regular'>Invest and manage all your crypto at one place.</p>
            <Link target='_blank' href="https://discord.com" className='capitalize mt-20 p-5 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple to-pink rounded-3xl shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer'>join via discord</Link>
            <Image src="/ethereum.png" width={75} height={75} alt='bitcoin' className='float absolute top-[100px] right-[-100px]' />
        </div>
    </section>
  )
}

export default JoinSection