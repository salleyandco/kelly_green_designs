'use client';

import { useState } from 'react';
import Button from './Button';
import Brand from './Brand';
import { Menu } from './Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={'fixed top-0 z-50 flex w-full items-center justify-between'}
    >
      <span className="w-14 md:hidden" />
      <Brand className="my-6 md:mx-9" />
      {/* <span className="hidden grow md:block" />
      <div className="mr-9 flex items-center self-start">
        <Button href="/contact" className="hidden md:block">
          Concierge
        </Button>
      </div> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          'group relative z-50 mr-4 flex h-2 w-10 cursor-pointer flex-col justify-between opacity-100 transition-opacity duration-500 hover:opacity-40 md:m-9 md:h-[calc(0.13793vw+7.24138px)] md:w-[calc(0.68966vw+36.2069px)] xl:h-2.5 xl:w-12.5'
        }
      >
        <span
          className={
            'absolute left-0 h-0.5 w-full origin-center -translate-y-1/2 bg-black' +
            (isOpen
              ? ' top-1/2 -translate-y-1/2 rotate-45 delay-300'
              : ' top-px group-hover:-top-px')
          }
          style={{
            transition: isOpen
              ? 'transform 0.3s ease 0.3s, top 0.3s ease'
              : 'transform 0.3s ease, top 0.3s ease',
          }}
        ></span>
        <span
          className={
            'absolute left-0 h-0.5 w-full origin-center -translate-y-1/2 bg-black' +
            (isOpen
              ? ' top-1/2 -translate-y-1/2 -rotate-45 delay-300'
              : ' top-[calc(100%-1px)] group-hover:top-[calc(100%+1px)]')
          }
          style={{
            transition: isOpen
              ? 'transform 0.3s ease 0.3s, top 0.3s ease'
              : 'transform 0.3s ease, top 0.3s ease',
          }}
        ></span>
      </button>
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </header>
  );
}
