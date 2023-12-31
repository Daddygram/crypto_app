import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { coinOptions } from './utilities/FetchData';
import { Button } from '@mui/material';

const SearchForm: React.FC<CoinsProps> = ({ setCoins, setIsLoading, setHasResults }) => {
    const [search, setSearch] = useState('');
    

    const handleSearch = async () => {
        if (search) {
            setIsLoading(true);

            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en', coinOptions);
            const coinsData = await res.json();

            const searchedCoins = coinsData.filter(
                (item: any) => item.name.toLowerCase().includes(search) || item.symbol.toLowerCase().includes(search),
            );

            setHasResults(searchedCoins.length > 0);

            window.scrollTo({ top: 0, behavior: 'smooth' });

            setSearch('');
            setCoins(searchedCoins);
            setIsLoading(false);
        }
    };

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:mt-10 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src="/magnifying-glass.svg"
                    className='absolute left-4 xs:left-8 xs:w-8 xs:h-8'
                    width={25}
                    height={25}
                    alt='Search Icon'
                />
                <Input
                    className='base-regular h-fit border-0 bg-black-400 py-6 
                pl-12 xs:pl-16 pr-20 xs:pr-[100px] text-white-800 !ring-0 !ring-offset-0
                placeholder:text-white-800'
                    type='text'
                    placeholder=''
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    onSubmit={handleSearch}
                />
                <Button
                    className="hover:bg-black-200 xs:mr-3"
                    sx={{ color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '100px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '25px', xs: '20px' } }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </label>
        </form>
    );
};

export default SearchForm;
