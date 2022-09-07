import Image from 'next/image';

const Card = (props) => {
  return (
    <div className='relative flex items-center justify-center w-56 overflow-hidden rounded-2xl shrink-0'>
      <Image
        className='object-cover w-full h-full'
        draggable='false'
        src={props.image}
        alt={props.name}
        layout='fill'
        loading='lazy'
      />
      <div className='absolute bottom-0 left-0 flex justify-between w-full h-12 px-4 py-2 backdrop-blur'>
        <div className='flex flex-col justify-center'>
          <span className='text-xs opacity-50'>#{props.number}</span>
          <span className='text-xs font-semibold capitalize cursor-pointer xl:text-sm hover:underline'>
            {props.name.slice(0, 15)}
            {props.name.length > 15 && '...'}
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <span className='text-xs font-semibold xl:text-sm'>{props.price}</span>
          <svg className='w-4 h-4 fill-white' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.77011 14.43L10.3801 15.15C11.4101 15.61 12.5901 15.61 13.6301 15.15L15.2401 14.43C16.6801 13.79 18.0101 15.53 17.0101 16.75L13.5501 20.98C12.7001 22.02 11.3101 22.02 10.4501 20.98L7.00011 16.75C5.99011 15.53 7.32011 13.79 8.77011 14.43Z' />
            <path d='M8.56978 11.67C8.26978 11.89 8.30978 12.35 8.64978 12.52L10.9998 13.69C11.5498 13.97 12.4398 13.97 12.9798 13.69L15.3298 12.52C15.6598 12.35 15.6998 11.9 15.4098 11.67L12.2998 9.33001C12.1198 9.20001 11.8798 9.20001 11.6998 9.33001L8.56978 11.67Z' />
            <path d='M17.8798 8.23999L13.7098 3.03999C13.6298 2.93999 13.5398 2.84999 13.4498 2.75999C13.1898 2.50999 12.8198 2.73999 12.8198 3.09999V7.39999C12.8198 7.55999 12.8898 7.70999 13.0198 7.79999L17.1698 10.92L17.3498 11.05C17.5298 11.18 17.7798 11.18 17.9298 11.02C18.6298 10.26 18.6198 9.15999 17.8798 8.23999Z' />
            <path d='M6.10986 8.33L10.2599 3.05C10.3399 2.95 10.4199 2.86 10.5099 2.77C10.7699 2.52 11.1399 2.74 11.1399 3.11V7.48C11.1399 7.64 11.0699 7.78 10.9399 7.88L6.80985 11.05L6.63985 11.18C6.45985 11.31 6.20986 11.31 6.04986 11.14C5.36986 10.37 5.37986 9.27 6.10986 8.33Z' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
