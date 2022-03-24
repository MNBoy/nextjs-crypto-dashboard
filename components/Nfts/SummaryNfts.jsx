import Card from '../UI/Card';

/* eslint-disable @next/next/no-img-element */
const SummaryNfts = (props) => {
  const nfts = [
    {
      id: 1,
      name: 'Mafia man',
      number: '001',
      price: 2.3,
      image:
        'https://lh3.googleusercontent.com/EQBkTH5h6KI-5q-UoxCNQFv2Qfd0SKS3FcoDe2nycWQHWHPw4fBYOhMNU7egiU4IJOiqYLbB62pwler_hEnusM4lGjTzGnqi9ywggA=s0',
    },
    {
      id: 2,
      name: 'Moody Boy',
      number: '003',
      price: 1.2,
      image:
        'https://lh3.googleusercontent.com/hoxvjYklmGhiDD-l8g6LhNwj7IsMz5PO2eemOzUbWPk6TJQLNr7qQGZw9BaKpOvJSzI1hqk9VcfZT60tF6rfhn4HQe-faQMDmkTB=s0',
    },
    {
      id: 3,
      name: 'Gang Boy',
      number: '095',
      price: 0.1,
      image:
        'https://lh3.googleusercontent.com/MxnwmGVGIvBlB15P40iJrBiowbgvgVAvP3WDDu7h6g-HNXVHaMdNYNsDnxbVExP9f7vf125_pyYBVZW5WNuNIu5y_YyxB9HmOBo0j_Q=s0',
    },
  ];

  return (
    <div className='flex flex-col h-full'>
      <header className='flex items-center justify-between w-full p-3 lg:py-6'>
        <div className='flex flex-col gap-y-2'>
          <span className='font-medium'>NFT Collections</span>
          <span className='text-xs font-light text-gray-500'>Creator | Artist</span>
        </div>
        <div className='flex items-center w-auto h-12 px-3 lg:px-6 py-2 pr-2 lg:py-2 border-[.1px] border-gray-600 rounded-full cursor-pointer justify-evenly bg-slateTheme gap-x-2'>
          <span className='text-sm'>EtherNose</span>
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
      <div className='flex flex-1 w-auto pb-3 pl-3 overflow-x-scroll lg:pb-6 lg:pl-6 gap-x-3'>
        {nfts.map((nft) => {
          return <Card key={nft.id} name={nft.name} number={nft.number} price={nft.price} image={nft.image} />;
        })}
      </div>
    </div>
  );
};

export default SummaryNfts;
