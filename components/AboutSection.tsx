import Image from 'next/image'
import React from 'react'

import { FaRegHandshake } from "react-icons/fa";    
import { FaGoogleWallet } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";


const AboutSection = () => {
  return (
    <section id='about' className='min-h-screen flex-center w-full gap-10 mt-[100px] flex-wrap'>
        <div className=' '>
            <Image className='rounded-2xl' src="/cryptomarket.png" alt='cryptomarket' width={500} height={500} />
        </div>
        <div className='gap-8 w-[500px] h-auto p-6 text-white flex-center flex-col'>
            <div className='bg-black-300 w-full flex-center gap-3 sm:gap-5 rounded-xl py-6 xs:px-4'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl '><FaRegHandshake className='w-full h-full xs:p-2' /></span>
                <span>
                    <h3 className='uppercase font-bold text-[25px] mb-2'>Easy to Use</h3>
                    <p>We make it easy to Discover, Invest and manage.</p>
                </span>
            </div>
            <div className='bg-black-300 w-full flex-center gap-3 sm:gap-5 rounded-xl py-6 xs:px-4'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl '><FaGoogleWallet className='w-full h-full xs:p-2 font-bold' /></span>
                <span>
                    <h3 className='uppercase font-bold text-[25px] mb-2'>DRIVE YOUR COLLECTION</h3>
                    <p>Discover, collect the right crypto collections to buy or sell.</p>
                </span>
            </div>
            <div className='bg-black-300 w-full flex-center gap-3 sm:gap-5 rounded-xl py-6 xs:px-4'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl p-1 '><FaWallet className='w-full h-full xs:p-2' /></span>
                <span>
                    <h3 className='uppercase font-bold text-[25px] mb-2'>CONNECT YOUR WALLET</h3>
                    <p>Invest all your crypto at one place on one platform.</p>
                </span>
            </div>
        </div>
    </section>
  )
}

export default AboutSection