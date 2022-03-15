const Summary = (props) => {
  const balance = props.balance;
  const inComing = props.inComing;
  const outGoing = props.outGoing;

  return (
    <div className='flex flex-col h-full px-4 justify-evenly gap-y-1 lg:gap-y-3'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-4'>
          <span className='flex items-center justify-center w-10 h-10 p-2 rounded-full lg:w-12 lg:h-12 ring-2 ring-green-500 ring-offset-2 ring-offset-bgColor bg-slateTheme'>
            <svg className='w-6 h-6 fill-white' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M17.2498 13.6875C17.0123 13.6875 16.7748 13.6 16.5873 13.4125C16.2248 13.05 16.2248 12.45 16.5873 12.0875L26.8373 1.8375C27.1998 1.475 27.7998 1.475 28.1623 1.8375C28.5248 2.2 28.5248 2.8 28.1623 3.1625L17.9123 13.4125C17.7373 13.5875 17.4998 13.6875 17.2498 13.6875Z' />
              <path d='M22.2875 14.6875H16.25C15.7375 14.6875 15.3125 14.2625 15.3125 13.75V7.71249C15.3125 7.19999 15.7375 6.77499 16.25 6.77499C16.7625 6.77499 17.1875 7.19999 17.1875 7.71249V12.8125H22.2875C22.8 12.8125 23.225 13.2375 23.225 13.75C23.225 14.2625 22.8 14.6875 22.2875 14.6875Z' />
              <path d='M18.75 28.4375H11.25C4.4625 28.4375 1.5625 25.5375 1.5625 18.75V11.25C1.5625 4.4625 4.4625 1.5625 11.25 1.5625H13.75C14.2625 1.5625 14.6875 1.9875 14.6875 2.5C14.6875 3.0125 14.2625 3.4375 13.75 3.4375H11.25C5.4875 3.4375 3.4375 5.4875 3.4375 11.25V18.75C3.4375 24.5125 5.4875 26.5625 11.25 26.5625H18.75C24.5125 26.5625 26.5625 24.5125 26.5625 18.75V16.25C26.5625 15.7375 26.9875 15.3125 27.5 15.3125C28.0125 15.3125 28.4375 15.7375 28.4375 16.25V18.75C28.4375 25.5375 25.5375 28.4375 18.75 28.4375Z' />
            </svg>
          </span>
          <div className='flex flex-col'>
            <span className='text-sm font-medium lg:text-base'>Incoming</span>
            <span className='text-xs font-light text-gray-500 lg:text-sm'>RPW</span>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-xs text-gray-500 lg:text-sm'>
            <strong className='text-sm font-medium text-white lg:text-lg'>{inComing.price}</strong> USD
          </span>
          <span className='text-xs text-green-500'>{inComing.percent}</span>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-4'>
          <span className='flex items-center justify-center w-10 h-10 p-2 rounded-full lg:w-12 lg:h-12 ring-2 ring-red-500 ring-offset-2 ring-offset-bgColor bg-slateTheme'>
            <svg className='w-6 h-6 fill-white' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M16.2498 14.6875C16.0123 14.6875 15.7748 14.6 15.5873 14.4125C15.2248 14.05 15.2248 13.45 15.5873 13.0875L25.8373 2.8375C26.1998 2.475 26.7998 2.475 27.1623 2.8375C27.5248 3.2 27.5248 3.8 27.1623 4.1625L16.9123 14.4125C16.7248 14.6 16.4873 14.6875 16.2498 14.6875Z' />
              <path d='M27.5 9.4375C26.9875 9.4375 26.5625 9.0125 26.5625 8.5V3.4375H21.5C20.9875 3.4375 20.5625 3.0125 20.5625 2.5C20.5625 1.9875 20.9875 1.5625 21.5 1.5625H27.5C28.0125 1.5625 28.4375 1.9875 28.4375 2.5V8.5C28.4375 9.0125 28.0125 9.4375 27.5 9.4375Z' />
              <path d='M18.75 28.4375H11.25C4.4625 28.4375 1.5625 25.5375 1.5625 18.75V11.25C1.5625 4.4625 4.4625 1.5625 11.25 1.5625H13.75C14.2625 1.5625 14.6875 1.9875 14.6875 2.5C14.6875 3.0125 14.2625 3.4375 13.75 3.4375H11.25C5.4875 3.4375 3.4375 5.4875 3.4375 11.25V18.75C3.4375 24.5125 5.4875 26.5625 11.25 26.5625H18.75C24.5125 26.5625 26.5625 24.5125 26.5625 18.75V16.25C26.5625 15.7375 26.9875 15.3125 27.5 15.3125C28.0125 15.3125 28.4375 15.7375 28.4375 16.25V18.75C28.4375 25.5375 25.5375 28.4375 18.75 28.4375Z' />
            </svg>
          </span>
          <div className='flex flex-col'>
            <span className='text-sm font-medium lg:text-base'>Outgoing</span>
            <span className='text-xs font-light text-gray-500 lg:text-sm'>RPW (Not Available)</span>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-xs text-gray-500 lg:text-sm'>
            <strong className='text-sm font-medium text-white lg:text-lg'>{outGoing.price}</strong> USD
          </span>
          <span className='text-xs text-red-500'>{outGoing.percent}</span>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-x-4'>
          <span className='flex items-center justify-center w-10 h-10 p-2 rounded-full lg:w-12 lg:h-12 ring-2 ring-white ring-offset-2 ring-offset-bgColor bg-slateTheme'>
            <svg className='w-7 h-7 fill-white' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M16.75 21.775H13.6125C11.5625 21.775 9.89995 20.05 9.89995 17.925C9.89995 17.4125 10.325 16.9875 10.8375 16.9875C11.35 16.9875 11.775 17.4125 11.775 17.925C11.775 19.0125 12.6 19.9 13.6125 19.9H16.75C17.5625 19.9 18.2375 19.175 18.2375 18.3C18.2375 17.2125 17.85 17 17.2125 16.775L12.175 15C11.2 14.6625 9.88745 13.9375 9.88745 11.7C9.88745 9.77501 11.4 8.22501 13.25 8.22501H16.3875C18.4375 8.22501 20.1 9.95001 20.1 12.075C20.1 12.5875 19.675 13.0125 19.1625 13.0125C18.65 13.0125 18.225 12.5875 18.225 12.075C18.225 10.9875 17.4 10.1 16.3875 10.1H13.25C12.4375 10.1 11.7625 10.825 11.7625 11.7C11.7625 12.7875 12.15 13 12.7875 13.225L17.825 15C18.8 15.3375 20.1125 16.0625 20.1125 18.3C20.1 20.2125 18.6 21.775 16.75 21.775Z' />
              <path d='M15 23.4375C14.4875 23.4375 14.0625 23.0125 14.0625 22.5V7.5C14.0625 6.9875 14.4875 6.5625 15 6.5625C15.5125 6.5625 15.9375 6.9875 15.9375 7.5V22.5C15.9375 23.0125 15.5125 23.4375 15 23.4375Z' />
              <path d='M18.75 28.4375H11.25C4.4625 28.4375 1.5625 25.5375 1.5625 18.75V11.25C1.5625 4.4625 4.4625 1.5625 11.25 1.5625H18.75C25.5375 1.5625 28.4375 4.4625 28.4375 11.25V18.75C28.4375 25.5375 25.5375 28.4375 18.75 28.4375ZM11.25 3.4375C5.4875 3.4375 3.4375 5.4875 3.4375 11.25V18.75C3.4375 24.5125 5.4875 26.5625 11.25 26.5625H18.75C24.5125 26.5625 26.5625 24.5125 26.5625 18.75V11.25C26.5625 5.4875 24.5125 3.4375 18.75 3.4375H11.25Z' />
            </svg>
          </span>
          <div className='flex flex-col'>
            <span className='text-sm font-medium lg:text-base'>Balance</span>
            <span className='text-xs font-light text-gray-500 lg:text-sm'>RPW</span>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-xs text-gray-500 lg:text-sm'>
            <strong className='text-sm font-medium text-white lg:text-lg'>{balance.price}</strong> USD
          </span>
          <span className='text-xs text-green-500'>{balance.percent}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
