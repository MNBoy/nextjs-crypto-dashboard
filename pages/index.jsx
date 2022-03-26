/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

import moment from 'moment';
import Swal from 'sweetalert2';

import SummaryAssets from '../components/Assets/SummaryAssets';
import SummaryCoins from '../components/Coins/SummaryCoins';
import SummaryNfts from '../components/Nfts/SummaryNfts';
import CandleChart from '../components/UI/CandleChart';

export default function Home({ coinsData }) {
  const [symbol, setSymbol] = useState('BTC');
  const [candleChartData, setCandleChartData] = useState({
    coin: {},
    data: [],
  });
  const [clickedCoin, setClickedCoin] = useState(coinsData.filter((coin) => coin.id === 'bitcoin')[0]);

  const getChartData = useCallback(async () => {
    const nowUnixTime = moment().unix();
    const beforeUnixTime = moment().subtract(1, 'days').unix();
    const seconds = 900; // 300, 900, 1800, 7200, 14400, 86400
    let chartData = [];
    try {
      const chartRes = await fetch(
        `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${symbol}&start=${beforeUnixTime}&end=${nowUnixTime}&period=${seconds}`
      );
      chartData = await chartRes.json();
      if (!chartData.error) {
        const mappedData = await chartData.map((item) => {
          const date = new Date(item.date);
          return {
            x: moment(date).format(),
            y: [item.open, item.high, item.low, item.close],
          };
        });

        setCandleChartData({
          coin: clickedCoin,
          data: mappedData,
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: 'Please select a different coin!',
        });
      }
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'To get the chart data, please change your ip address!',
      });
    }
  }, [symbol, clickedCoin]);

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  const changeSymbol = (coin) => {
    setSymbol(coin.symbol.toUpperCase());
    setClickedCoin(coin);
  };

  const numberSplitter = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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
        <div className='relative hidden p-2 border-b border-r border-gray-900 md:block lg:h-3/5'>
          {candleChartData.coin.symbol && (
            <header className='flex items-center justify-between w-full p-3 lg:py-6'>
              <div className='flex flex-col gap-y-2'>
                <div className='flex items-center space-x-1'>
                  <div className='flex items-center justify-center rounded-full w-9 h-9'>
                    <img src={candleChartData.coin.image} alt={candleChartData.coin.name} />
                  </div>
                  <h1 className='text-lg font-medium'>{candleChartData.coin.name}</h1>
                  <span className='text-sm text-gray-500 font-extralight'>
                    {candleChartData.coin.symbol.toUpperCase()}
                  </span>
                </div>
                <div className='flex items-center space-x-1'>
                  <span className='text-xl font-medium '>{numberSplitter(candleChartData.coin.current_price)}</span>
                  <span>USD</span>
                  <span
                    className={`ml-1 text-xs ${
                      candleChartData.coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {candleChartData.coin.price_change_percentage_24h > 0 && '+'}
                    {candleChartData.coin.price_change_percentage_24h}
                  </span>
                </div>
              </div>
              <div className='flex items-center w-auto h-12 px-3 lg:px-6 py-2 pr-2 lg:py-2 border-[.1px] border-gray-600 rounded-full cursor-pointer justify-evenly bg-slateTheme gap-x-2'>
                <span className='text-sm'>Last 24h</span>
                <span>
                  <svg width='15' height='15' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M17.9202 8.18005H11.6902H6.08024C5.12024 8.18005 4.64024 9.34005 5.32024 10.0201L10.5002 15.2001C11.3302 16.0301 12.6802 16.0301 13.5102 15.2001L15.4802 13.2301L18.6902 10.0201C19.3602 9.34005 18.8802 8.18005 17.9202 8.18005Z'
                      fill='#fff'
                    />
                  </svg>
                </span>
              </div>
            </header>
          )}
          <CandleChart height={280} chartData={candleChartData.data} />
          <div className='absolute items-center justify-center hidden w-48 py-4 -translate-x-1/2 rounded-full cursor-pointer group md:flex -bottom-6 left-1/2 gap-x-4 bg-blueTheme'>
            <div className='absolute inset-0 transition duration-500 rounded-full opacity-0 bg-blueTheme blur-lg group-hover:opacity-100'></div>
            <button className='z-10 text-sm'>See More Details</button>
            <span className='z-10'>
              <svg width='15' height='15' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.9202 8.18005H11.6902H6.08024C5.12024 8.18005 4.64024 9.34005 5.32024 10.0201L10.5002 15.2001C11.3302 16.0301 12.6802 16.0301 13.5102 15.2001L15.4802 13.2301L18.6902 10.0201C19.3602 9.34005 18.8802 8.18005 17.9202 8.18005Z'
                  fill='#fff'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='p-2 border-b border-r border-gray-900 lg:border-b-0 h-72 lg:h-2/5'>
          <SummaryCoins coinsData={coinsData} changeSymbol={changeSymbol} />
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

export const getStaticProps = async () => {
  const coinsRes = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const coinsData = await coinsRes.json();

  return {
    props: {
      coinsData,
    },
  };
};
