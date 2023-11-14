"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { coinOptions } from './utilities/FetchData';

const MarketSection = () => {
  const [coins, setCoins] = useState<CoinData[]>([])
  const [page, setPage] = useState<Number>(1)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`

  const fetchData = async () => {
    try {
      const response = await fetch(url, coinOptions);
      if (response.status === 429) {
        console.log('Rate limit exceeded. Waiting and retrying...');
        setTimeout(fetchData, 60000); // Wait for 1 minute and retry
      } else if (response.ok) {
        const json = await response.json();
        setCoins(json);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(coins)

  function numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
      <section className='nav-padding w-full'>
        <h2 className='heading3 mb-7 text-white'>Cryptocurrency Prices by Market Cap</h2>
        <div className='grid grid-cols-4 gap-4rem p-6 w-full 
        gradient_purple text-white rounded-t-xl'>
          <p className='paragraph-regular'>Coin</p>
          <p className='paragraph-regular text-end'>Price</p>
          <p className='paragraph-regular text-end'>24h Change</p>
          <p className='paragraph-regular text-end'>Market Cap</p>
        </div>
        <div>
          {coins.map((item: CoinData) => (
            <Link href="/" key={item.id} className='grid grid-cols-4 gap-4rem p-6 w-full text-white justify-start items-center'>
            <span className='flex gap-3'>
              <Image src={item.image} width={50} height={50} alt={item.name} />
              <p className='text-start flex-center'>{item.name}</p>
            </span>
            <p className='text-right'>{`$ ${item.current_price}`}</p>
            <p className='text-right'>{`${item.price_change_percentage_24h.toFixed(2)} %`}</p>
            <p className='text-right'>{`$ ${numberWithCommas(item.market_cap)}`}</p>
          </Link>
          ))}
          {paginationButtons}
        </div>
      </section>
  )
}

export default MarketSection