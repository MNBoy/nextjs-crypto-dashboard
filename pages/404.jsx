/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-screen flex flex-col gap-y-4 justify-center items-center h-screen text-white font-semibold text-3xl'>
      <h1>Page not found!</h1>
      <Link href='/'>
        <button className='py-2 px-20 bg-blueTheme bg-gradient-to-t rounded-3xl text-base'>Go Back</button>
      </Link>
    </div>
  );
}
