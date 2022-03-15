/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export default function Navbar(props) {
  const [fullScreen, setFullScreen] = useState(false);
  const navClasses = props.className;

  const handleScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  };

  return (
    <nav className={`${navClasses} items-center justify-between col-span-11 px-12 border-b border-gray-900`}>
      <div className='flex items-center w-full gap-x-2'>
        <span>
          <svg width='25' height='25' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.375 26.25C20.9334 26.25 26.25 20.9334 26.25 14.375C26.25 7.81662 20.9334 2.5 14.375 2.5C7.81662 2.5 2.5 7.81662 2.5 14.375C2.5 20.9334 7.81662 26.25 14.375 26.25Z'
              stroke='#fff'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M27.5 27.5L25 25' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </span>
        <input
          className='w-full text-sm font-light bg-transparent border-0 outline-none'
          type='text'
          placeholder='Search something in tokens, wallet, transactions...'
        />
      </div>
      <div className='flex items-center gap-x-4'>
        <div className='flex items-center p-2 pr-4 rounded-full cursor-pointer bg-slateTheme gap-x-4'>
          <img
            className='w-10 h-10 rounded-full'
            src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg'
            alt='avatar'
          />
          <div className='flex flex-col w-40'>
            <span className='text-sm'>User Name</span>
            <span className='text-[10px]'>Transaction Manager</span>
          </div>
          <span>
            <svg width='15' height='15' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17.9202 8.18005H11.6902H6.08024C5.12024 8.18005 4.64024 9.34005 5.32024 10.0201L10.5002 15.2001C11.3302 16.0301 12.6802 16.0301 13.5102 15.2001L15.4802 13.2301L18.6902 10.0201C19.3602 9.34005 18.8802 8.18005 17.9202 8.18005Z'
                fill='#fff'
              />
            </svg>
          </span>
        </div>
        <div className='relative flex items-center justify-center p-3 rounded-full cursor-pointer bg-slateTheme w-15 h-15'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
              stroke='#fff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
              stroke='#fff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='absolute flex items-center justify-center w-5 h-5 p-2 text-xs rounded-full bg-blueTheme -top-1 -right-1'>
            14
          </span>
        </div>
        <div className='relative flex items-center justify-center p-3 rounded-full cursor-pointer bg-slateTheme w-15 h-15'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z'
              stroke='#fff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
            />
            <path
              d='M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z'
              stroke='#fff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601'
              stroke='#fff'
              strokeWidth='1.5'
              strokeMiterlimit='10'
            />
          </svg>
          <span className='absolute flex items-center justify-center w-5 h-5 p-2 text-xs rounded-full bg-blueTheme -top-1 -right-1'>
            2
          </span>
        </div>
        <div
          onClick={handleScreen}
          className='relative flex items-center justify-center p-3 rounded-full cursor-pointer bg-slateTheme w-15 h-15'
        >
          {!fullScreen && (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M21 9V3H15' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M3 15V21H9' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M21 3L13.5 10.5' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M10.5 13.5L3 21' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          )}
          {fullScreen && (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M13.499 4.49976L13.499 10.4998L19.499 10.4998'
                stroke='#fff'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.499 10.4998L20.999 2.99975'
                stroke='#fff'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.5 19.5V13.5H4.5'
                stroke='#fff'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path d='M3 21L10.5 13.5' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}
