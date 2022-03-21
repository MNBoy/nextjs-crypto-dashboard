import Head from 'next/head';

import SummaryAssets from '../components/Assets/SummaryAssets';
import SummaryCoins from '../components/Coins/SummaryCoins';
import SummaryNfts from '../components/Nfts/SummaryNfts';

export default function Home({ coinsData }) {
  const inComing = {
    price: '32,800',
    percent: '+06.96 %',
  };

  const outGoing = {
    price: '15,450',
    percent: '-06.96 %',
  };

  const balance = {
    price: '17,350',
    percent: '+09.23 %',
  };

  return (
    <div className='flex flex-col h-full lg:flex-row'>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className='flex flex-col w-full lg:w-4/6'>
        <div className='relative p-2 border-b border-r border-gray-900 h-3/5'>
          Charts
          <div className='absolute items-center justify-center hidden w-48 py-4 -translate-x-1/2 rounded-full cursor-pointer lg:flex -bottom-6 left-1/2 gap-x-4 bg-blueTheme'>
            <button className='text-sm'>See More Details</button>
            <span>
              <svg width='15' height='15' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.9202 8.18005H11.6902H6.08024C5.12024 8.18005 4.64024 9.34005 5.32024 10.0201L10.5002 15.2001C11.3302 16.0301 12.6802 16.0301 13.5102 15.2001L15.4802 13.2301L18.6902 10.0201C19.3602 9.34005 18.8802 8.18005 17.9202 8.18005Z'
                  fill='#fff'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='p-2 border-b border-r border-gray-900 lg:border-b-0 h-2/5'>
          <SummaryCoins coinsData={coinsData} />
        </div>
      </div>
      <div className='flex flex-col w-full lg:w-2/6'>
        <div className='p-2 border-b border-gray-900 h-2/5'>
          <SummaryAssets inComing={inComing} outGoing={outGoing} balance={balance} />
        </div>
        <div className='h-3/5'>
          <SummaryNfts />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  const coinsData = await res.json();

  return {
    props: {
      coinsData,
    },
  };
};
