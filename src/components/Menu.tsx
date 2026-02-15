import { Dispatch } from 'react';
import Brand from './Brand';
import Image from 'next/image';
import PageLinks from './PageLinks';

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
      className={`fixed top-0 grid h-screen w-full bg-bone-white md:grid-cols-2 ${
        isOpen ? 'animate-menu-slide-in' : 'animate-menu-slide-out'
      }`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="flex flex-col justify-between p-9">
        <Brand className="hidden md:order-2 md:block" />
        <PageLinks
          setIsOpen={setIsOpen}
          classNames={{
            list: 'mt-30 md:mt-4 md:block md:order-1',
            item: 'text-lg/[2em] text-center md:text-sm/[1.8rem] md:text-left',
          }}
        />
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
