import Card from '../UI/Card';

/* eslint-disable @next/next/no-img-element */
const SummaryNfts = (props) => {
  const nfts = [
    {
      id: 1,
      name: 'Hand of mind',
      number: '001',
      price: 2.3,
      image:
        'https://images.unsplash.com/photo-1636975262325-a0c611796b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    },
    {
      id: 2,
      name: 'Astronaut man',
      number: '003',
      price: 1.2,
      image:
        'https://images.unsplash.com/photo-1632536590701-14290ca3874b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      id: 3,
      name: 'Something else',
      number: '095',
      price: 0.05,
      image:
        'https://images.unsplash.com/photo-1638871735143-4d16a2f15ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
  ];

  return (
    <div className='flex flex-col h-full'>
      <header className='flex justify-between w-full p-6'>
        <div className='flex flex-col gap-y-2'>
          <span className='font-medium'>NFT Collections</span>
          <span className='text-xs font-light text-gray-500'>Creator | Artist</span>
        </div>
        <div className='flex items-center w-auto px-6 py-4 border-[.1px] border-gray-600 rounded-full cursor-pointer justify-evenly bg-slateTheme gap-x-2'>
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
      <div className='flex flex-1 w-auto pb-6 pl-6 overflow-x-scroll gap-x-3'>
        {nfts.map((nft) => {
          return <Card key={nft.id} name={nft.name} number={nft.number} price={nft.price} image={nft.image} />;
        })}
      </div>
    </div>
  );
};

export default SummaryNfts;
