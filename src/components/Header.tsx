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
      className={'fixed top-0 z-50 flex w-full items-start justify-between'}
    >
      <div className="mx-9 my-6">
        <Brand />
        {/* Bug: Causes a memory leak */}
        {/* {PageLinks(setIsOpen, 1)} */}
      </div>
      <div className="mr-9 hidden items-center md:flex">
        <Button href="/contact">Concierge</Button>
      </div>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
}
