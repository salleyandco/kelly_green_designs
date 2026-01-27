'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ScrollingImage() {
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const stickyText = document.querySelector(
      'section:last-of-type p:last-child'
    );
    const stickyHeight = stickyText?.clientHeight || 0;
    const offsetHeight = window.innerHeight - stickyHeight;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOffsetTop(offsetHeight);
  }, []);

  return (
    <section className="relative h-[200vh] bg-gray-200">
      <Image
        src={'/IMG_8242.jpg'}
        alt="Scrolling image"
        fill
        className="object-cover"
      />
      <p className="sticky top-0 p-8 text-2xl uppercase">Caption</p>
      <p
        className={`sticky text-center font-display text-[9vi] uppercase`}
        style={{ top: `${offsetTop}px` }}
      >
        Designing for You
      </p>
    </section>
  );
}
