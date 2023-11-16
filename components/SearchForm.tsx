"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { coinOptions } from './utilities/FetchData'
import { Button } from '@mui/material'


const SearchForm: React.FC<CoinsProps> = ({setCoins}) => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
      if (search) {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', coinOptions);
        const coinsData = await res.json()
  
        const searchedCoins = coinsData.filter(
          (item:any) => item.name.toLowerCase().includes(search)
                 || item.symbol.toLowerCase().includes(search),
        );
  
        window.scrollTo({ left: 100, behavior: 'smooth' });
  
        setSearch('');
        setCoins(searchedCoins);
      }
    };

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image 
            src="/magnifying-glass.svg" 
            className='absolute left-8'
            width={32}
            height={32}
            alt='Search Icon' />
            <Input
            className='base-regular h-fit border-0 bg-black-400 py-6 
            pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0
            placeholder:text-white-800' 
            type='text'
            placeholder=''
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onSubmit={handleSearch}/>
            <Button className="hover:bg-black-200 mr-3" sx={{ color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '100px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '25px', xs: '20px' } }} onClick={handleSearch}>
              Search
            </Button>
        </label>
    </form>
  )
}

export default SearchForm