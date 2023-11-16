"use client"

import AboutSection from '@/components/AboutSection'
import MarketSection from '@/components/MarketSection'
import SearchForm from '@/components/SearchForm'
// import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const page = () => {

  const [coins, setCoins] = useState<CoinData[]>([])
  
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          {/* <Image src="bitcoin.svg" width={60} height={60} alt='bitcoin' className='float top-150px left-20px' /> */}
          <h1 className='text-outline heading2 sm:heading1 lg:text-7xl mb-6 text-center text-white uppercase'>
            Track and trade <br /> <span>Crypto Currencies</span>
          </h1>
        </div>
        <SearchForm coins={coins} setCoins={setCoins} />
        <MarketSection coins={coins} setCoins={setCoins} />
        <AboutSection />
      </section>
    </main>
  )
}

export default page