'use client';

import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';
import { Menu } from './Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleMenuState = (nextState: boolean) => {
    if (nextState) {
      setIsMenuMounted(true);
      setIsOpen(true);
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (Math.abs(delta) > 4) {
          if (currentY <= 0) {
            setIsHidden(false);
          } else {
            setIsHidden(delta > 0 && !isOpen);
          }
          lastScrollY.current = currentY;
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between transition-transform duration-500 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <span className="w-14 md:hidden" />
      <Brand className="z-50 my-6 md:z-0 md:mx-9" />
      <button
        onClick={() => handleMenuState(!isOpen)}
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
      {isMenuMounted && (
        <Menu
          isOpen={isOpen}
          setIsOpen={handleMenuState}
          onAnimationEnd={() => {
            if (!isOpen) {
              setIsMenuMounted(false);
            }
          }}
        />
      )}
    </header>
  );
}
