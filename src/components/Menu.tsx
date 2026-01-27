import { Dispatch } from 'react';
import Brand from './Brand';
import Image from 'next/image';
import PageLinks from './PageLinks';

export function Menu({ setIsOpen }: { setIsOpen: Dispatch<boolean> }) {
  return (
    <div className='grid grid-cols-2 w-full fixed h-screen top-0 bg-bone-white'>
      <button
        className='absolute top-9 right-9'
        onClick={() => setIsOpen(false)}
      >
        x
      </button>
      <div className='flex flex-col justify-between p-9'>
        {PageLinks(setIsOpen)}
        <Brand />
      </div>
      <Image
        src='/Firefly_Imagen_Full-bleed editorial photograph (sculptural floral composition) on a Matte stone (tra 658735 1.jpg'
        alt='Floral arrangement by Kelly Green Designs'
        className='w-full h-full object-cover bg-gray-200'
        width={3000}
        height={100}
      />
    </div>
  );
}
