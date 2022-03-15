/* eslint-disable @next/next/link-passhref */
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen text-3xl font-semibold text-white gap-y-4'>
      <Head>
        <title>404!</title>
      </Head>
      <h1>Page not found!</h1>
      <Link href='/'>
        <button className='px-20 py-2 text-base bg-blueTheme bg-gradient-to-t rounded-3xl'>Go Back</button>
      </Link>
    </div>
  );
}
