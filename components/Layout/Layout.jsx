import { Fragment } from 'react';

import Navbar from '../UI/Navbar';
import SideBar from '../UI/Sidebar';

export default function Layout(props) {
  return (
    <Fragment>
      <section className='container mx-auto max-w-screen-2xl grid grid-cols-12 h-screen grid-rows-[100px_minmax(500px,_1fr)]'>
        <SideBar className='fixed lg:flex lg:relative lg:inset-0' />
        <Navbar className='hidden lg:flex' />
        <main className='col-span-12 lg:col-span-11'>{props.children}</main>
      </section>
    </Fragment>
  );
}
