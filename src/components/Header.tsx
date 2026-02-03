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
      <button onClick={() => setIsOpen(true)} className="m-4 md:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z"
            fill="black"
          />
          <mask
            id="mask0_2002_1070"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="14"
          >
            <path
              d="M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2002_1070)">
            <rect width="32" height="32" fill="white" />
          </g>
        </svg>
      </button>
      <div className="mx-9 my-6">
        <Brand />
        <PageLinks
          setIsOpen={setIsOpen}
          depth={1}
          classNames={{ list: 'hidden md:block' }}
        />
      </div>
      <div className="mr-9 flex items-center">
        <Button href="/contact" className="hidden md:block">
          Contact
        </Button>
      </div>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
}
