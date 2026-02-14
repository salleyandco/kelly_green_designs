import { Project } from '@/data/projects/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Tile({
  metadata,
  className,
}: {
  metadata: Project;
  className?: string;
}) {
  const slug = '/projects/' + metadata.slug;

  return (
    <Link href={slug ?? '#'} className={className}>
      <div key={metadata.title}>
        {metadata.featured_image ? (
          <Image
            src={metadata.featured_image as string}
            alt={`Image representing ${metadata.title}`}
            width={400}
            height={400}
            className={`aspect-3/4 w-full object-cover`}
          />
        ) : (
          <div className={`aspect-3/4 w-full bg-gray-200`}></div>
        )}
        {/* <p className="text-xs">{metadata.categories.join(', ')}</p> */}
        <h4 className="text-md my-2">{metadata.title}</h4>
      </div>
    </Link>
  );
}
