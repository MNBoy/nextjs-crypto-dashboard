import { Fragment, useEffect, useState } from 'react';

import Navbar from '../UI/Navbar';
import SideBar from '../UI/Sidebar';

export default function Layout(props) {
  const [IsDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [IsDesktop]);

  return (
    <Fragment>
      {IsDesktop && (
        <section className='container mx-auto max-w-screen-2xl grid grid-cols-12 h-screen grid-rows-[100px_minmax(500px,_1fr)]'>
          <SideBar />
          <Navbar />
          <main className='col-span-11'>{props.children}</main>
        </section>
      )}
      {!IsDesktop && (
        <div className='flex items-center justify-center w-screen h-screen text-xl font-semibold text-white'>
          <h1>Please open with desktop!</h1>
        </div>
      )}
    </Fragment>
  );
}
