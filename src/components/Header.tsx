'use client';

import { useState } from 'react';
import Button from './Button';
import Brand from './Brand';
import PageLinks from './PageLinks';
import { Menu } from './Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={'flex fixed w-full justify-between items-start z-50 top-0'}
    >
      <div className='mx-9 my-6'>
        <Brand />
        {PageLinks(setIsOpen, 1)}
      </div>
      <div className='items-center mr-9 hidden md:flex'>
        <Button href='/contact'>Concierge</Button>
      </div>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
}
