"use client"

import AboutSection from '@/components/AboutSection'
import JoinSection from '@/components/JoinSection'
import MarketSection from '@/components/MarketSection'
import SearchForm from '@/components/SearchForm'
import React from 'react'
import { useState } from 'react'

const page = () => {

  const [coins, setCoins] = useState<CoinData[]>([])
  const [page, setPage] = useState<number>(1)
  const [coinsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [hasResults, setHasResults] = useState(true);

  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);
  
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col '>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='text-outline heading2 sm:heading1 lg:text-7xl mb-6 text-center text-white uppercase'>
            Track Live <br /> <span>Crypto Currencies</span>
          </h1>
        </div>
        <SearchForm coins={coins} setCoins={setCoins} page={page} setPage={setPage} hasResults={hasResults} setHasResults={setHasResults} currentCoins={currentCoins} coinsPerPage={coinsPerPage} isLoading={isLoading} setIsLoading={setIsLoading} />
        <MarketSection coins={coins} setCoins={setCoins} page={page} setPage={setPage} hasResults={hasResults} setHasResults={setHasResults} currentCoins={currentCoins} coinsPerPage={coinsPerPage} isLoading={isLoading} setIsLoading={setIsLoading} />
        <AboutSection />
        <JoinSection />
      </section>
    </main>
  )
}

export default page