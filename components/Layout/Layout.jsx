import { Fragment, useEffect, useState } from 'react';

import Navbar from '../UI/Navbar';
import SideBar from '../UI/Sidebar';

export default function Layout(props) {
  const [IsDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
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
          <main className='col-span-11 p-4'>{props.children}</main>
        </section>
      )}
      {!IsDesktop && (
        <div className='w-screen flex justify-center items-center h-screen text-white font-semibold text-xl'>
          <h1>Please open site with desktop!</h1>
        </div>
      )}
    </Fragment>
  );
}
