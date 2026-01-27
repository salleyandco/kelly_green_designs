import Link from 'next/link';
import { Dispatch } from 'react';
import data from '@/data/data.json';

export default async function PageLinks(
  setIsOpen: Dispatch<boolean>,
  depth?: number
) {
  const link = (page: Record<string, string>) => {
    return (
      <li key={page.name} className="list-none text-sm/[1.8rem]">
        {depth ? (
          <a onClick={() => setIsOpen(true)}>{page.name}</a>
        ) : (
          <Link href={page.href} onClick={() => setIsOpen(false)}>
            {page.name}
          </Link>
        )}
      </li>
    );
  };

  return <nav className="mt-4 hidden md:block">{data.pages.map(link)}</nav>;
}
