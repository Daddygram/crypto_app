"use client"
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';

import Image from 'next/image';
import Link from 'next/link';
import { coinOptions } from './utilities/FetchData';
import Loading from '../app/(root)/(home)/Loading';

const MarketSection: React.FC<CoinsProps> = ({coins, setCoins, currentCoins, page, setPage, coinsPerPage}) => {
  

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`

  const fetchData = async () => {
    try {
      const response = await fetch(url, coinOptions);
      if (response.status === 429) {
        console.log('Rate limit exceeded. Waiting and retrying...');
        setTimeout(fetchData, 60000);
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
  }, [page]);
  console.log(coins)

  function numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const paginate = (event:any, value:number) => {
    setPage(value);

    window.scrollTo({ behavior: 'smooth' });
  };

  if (!currentCoins.length) return <Loading />;

  return (
    <section id='market' className='nav-padding w-full'>
    <h2 className='heading3 mb-7 text-white text-center sm:text-left'>Cryptocurrency Prices by Market Cap</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4rem p-6 w-full gradient_purple text-white rounded-t-xl'>
      <p className='paragraph-regular'>Coin</p>
      <p className='paragraph-regular text-end'>Price</p>
      <p className='paragraph-regular text-end'>24h Change</p>
      <p className='paragraph-regular text-end'>Market Cap</p>
    </div>
    <div>
      {currentCoins.map((item: CoinData) => (
        <div key={item.id} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4rem p-6 w-full text-white justify-start items-center border-b-2 border-white-400 hover:brightness-120 hover:bg-black-400'>
          <span className='flex gap-3'>
            <Image src={item.image} width={50} height={50} alt={item.name} />
            <p className='text-start flex-center'>{item.name}</p>
          </span>
          <p className='text-right'>{`$ ${item.current_price}`}</p>
          <p className='text-right'>{`${item.price_change_percentage_24h.toFixed(2)} %`}</p>
          <p className='text-right'>{`$ ${numberWithCommas(item.market_cap)}`}</p>
        </div>
      ))}
      <div className='mt-[30px] flex-center gap-3'>
        <Pagination
          color="secondary"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(coins.length / coinsPerPage)}
          page={page}
          onChange={paginate}
          size="large"
          className="hover:brightness-110 font-bold py-3 px-5 rounded-full gradient_purple text-white"
        />
      </div>
    </div>
  </section>
  
  )
}

export default MarketSection