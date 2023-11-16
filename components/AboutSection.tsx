import Image from 'next/image'
import React from 'react'

import { FaRegHandshake } from "react-icons/fa";    

const AboutSection = () => {
  return (
    <div id='about' className='min-h-screen flex-center w-full gap-10 mt-[100px] flex-wrap'>
        <div className=' '>
            <Image className='rounded-2xl' src="/cryptomarket.png" alt='cryptomarket' width={500} height={500} />
        </div>
        <div className='gap-8 w-[500px] h-[500px] p-6 text-white flex-center flex-col'>
            <div className='bg-black-300 w-full flex-center gap-5 rounded-xl py-8 px-6'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl '><FaRegHandshake className='w-full h-full p-2' /></span>
                <span>
                    <h3>Easy to Use</h3>
                    <p>We make it easy to Discover, Invest and manage.</p>
                </span>
            </div>
            <div className='bg-black-300 w-full flex-center gap-5 rounded-xl py-8 px-6'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl '><FaRegHandshake className='w-full h-full p-2' /></span>
                <span>
                    <h3>Easy to Use</h3>
                    <p>We make it easy to Discover, Invest and manage.</p>
                </span>
            </div>
            <div className='bg-black-300 w-full flex-center gap-5 rounded-xl py-8 px-6'>
                <span className='flex-center w-[60px] h-[60px] gradient_blue-purple rounded-xl '><FaRegHandshake className='w-full h-full p-2' /></span>
                <span>
                    <h3>Easy to Use</h3>
                    <p>We make it easy to Discover, Invest and manage.</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default AboutSection