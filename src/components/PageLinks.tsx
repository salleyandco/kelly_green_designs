import Link from 'next/link';
import { Dispatch } from 'react';

const pages = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

export default function PageLinks({
  setIsOpen,
  depth,
  classNames,
}: {
  setIsOpen?: Dispatch<boolean>;
  depth?: number;
  classNames?: { list?: string; item?: string };
}) {
  const { item, list } = classNames || {};

  const renderLink = (page: Record<string, string>) => {
    // If menu with open/close behavior is needed
    if (setIsOpen) {
      // TODO: if the page has children, open the fly out menu
      if (depth)
        return <button onClick={() => setIsOpen(true)}>{page.name}</button>;

      return (
        <Link href={page.href} onClick={() => setIsOpen(false)} scroll={false}>
          {page.name}
        </Link>
      );
    }

    // Basic listing of pages
    return (
      <Link href={page.href} scroll={false}>
        {page.name}
      </Link>
    );
  };

  return (
    <nav className={list ?? ''}>
      {pages.map((page, i) => (
        <li key={i} className={`list-none ${item ?? ''}`}>
          {renderLink(page)}
        </li>
      ))}
    </nav>
  );
}
