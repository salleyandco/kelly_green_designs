import Link from 'next/link';
import Brand from './Brand';
import data from '@/data/data.json';

export default async function Footer() {
  const { pages, socials } = data;

  const renderPageLinks = () => {
    const link = (page: Record<string, string>) => (
      <li key={page.name} className="list-none">
        {/* TODO: if the page has children, open the fly out menu */}
        <Link href={page.href}>{page.name}</Link>
      </li>
    );

    return <nav className="">{pages.map(link)}</nav>;
  };

  const renderSocialLinks = () => {
    const link = (social: Record<string, string>) => (
      <li key={social.name} className="list-none">
        <Link href={social.href}>{social.icon}</Link>
      </li>
    );

    return (
      <nav className="flex gap-4">
        <>Follow</>
        {socials.map(link)}
      </nav>
    );
  };

  return (
    <footer className={'mt-30 mb-12 flex items-end justify-between'}>
      <div className="mx-8 flex gap-4">
        <Brand />
        {renderPageLinks()}
      </div>
      <div className="mx-16">
        {renderSocialLinks()}
        <small>
          © {new Date().getFullYear()} Kelly Green. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
