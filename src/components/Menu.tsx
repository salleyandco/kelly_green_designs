import { Dispatch } from 'react';
import Brand from './Brand';
import Image from 'next/image';
import PageLinks from './PageLinks';

// TODO: relayout and restyle for mobile
export function Menu({
  isOpen,
  setIsOpen,
  onAnimationEnd,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  onAnimationEnd?: () => void;
}) {
  return (
    <div
      className={`fixed top-0 grid h-screen w-full grid-cols-2 bg-bone-white ${
        isOpen ? 'animate-menu-slide-in' : 'animate-menu-slide-out'
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="flex flex-col justify-between p-9">
        <PageLinks
          setIsOpen={setIsOpen}
          classNames={{
            list: 'mt-4 hidden md:block',
            item: 'text-sm/[1.8rem]',
          }}
        />
        <Brand />
      </div>
      {/* TODO: replace image */}
      <Image
        src="/Firefly_Imagen_Full-bleed editorial photograph (sculptural floral composition) on a Matte stone (tra 658735 1.jpg"
        alt="Floral arrangement by Kelly Green Designs"
        className="h-full w-full bg-gray-200 object-cover"
        width={3000}
        height={100}
      />
    </div>
  );
}
