import Link from 'next/link';
import Brand from './Brand';
import PageLinks from './PageLinks';
import { JSX } from 'react';

// TODO: update icons with official ones
const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Instagram"
      >
        <rect
          width="18"
          height="18"
          x="3"
          y="3"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Facebook"
      >
        <rect
          width="22"
          height="22"
          x="1"
          y="1"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 8h-2a2 2 0 0 0-2 2v2h4v3h-4v6h-3v-6H6v-3h3v-2a5 5 0 0 1 5-5h2v3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Twitter"
      >
        <rect
          width="22"
          height="22"
          x="1"
          y="1"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.11 4.11 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.07 4.07 0 0 0-.56 2.07c0 1.43.73 2.69 1.85 3.43a4.07 4.07 0 0 1-1.86-.52v.05c0 2 1.42 3.67 3.3 4.05a4.1 4.1 0 0 1-1.85.07c.52 1.62 2.03 2.8 3.82 2.83A8.23 8.23 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Pinterest"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 17c-2.5 0-4-1.8-4-3.8 0-1.6 1.1-3.1 3.2-3.1 1.1 0 2.3.7 2.3 2 0 1.2-.7 2.7-2.1 2.7-.5 0-.9-.3-.8-.8.1-.5.3-1.1.3-1.5 0-.4-.2-.7-.6-.7-.5 0-.9.5-.9 1.2 0 .5.2 1.1.2 1.1s-.7 2.8-.8 3.3c-.2.7.2 1.3.8 1.3.9 0 1.5-1.1 1.5-2.6 0-1.1.8-2 1.8-2 1.1 0 1.5.8 1.5 1.7 0 1.2-.7 2.7-2.1 2.7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Substack',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Substack"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="6" y="7" width="12" height="2" fill="currentColor" />
        <rect x="6" y="11" width="12" height="2" fill="currentColor" />
        <rect x="6" y="15" width="12" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="TikTok"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 8.5V13a4 4 0 1 1-4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 8.5c1.1 0 2.1-.3 3-.8v2.3c-1.1.3-2.2.5-3 .5V8.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="LinkedIn"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="6" y="9" width="3" height="9" fill="currentColor" />
        <circle cx="7.5" cy="7" r="1.5" fill="currentColor" />
        <rect x="11" y="13" width="3" height="5" fill="currentColor" />
        <path
          d="M12.5 13V12c0-1.1.9-2 2-2s2 .9 2 2v6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default async function Footer() {
  const renderSocialLinks = () => {
    const link = (social: {
      name: string;
      href: string;
      icon: JSX.Element;
    }) => (
      <li key={social.name} className="list-none">
        <Link href={social.href}>{social.icon}</Link>
      </li>
    );

    return (
      <nav className="my-8 flex gap-4 md:my-4">
        <>Follow</>
        {socials.map(link)}
      </nav>
    );
  };

  return (
    <footer className="mx-8 my-12 flex flex-col justify-between md:mt-30 md:flex-row md:items-end">
      <div className="flex flex-col gap-4 md:flex-row">
        <Brand />
        <PageLinks />
      </div>
      <div className="md:mx-8">
        {renderSocialLinks()}
        <small>
          © {new Date().getFullYear()} Kelly Green. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
