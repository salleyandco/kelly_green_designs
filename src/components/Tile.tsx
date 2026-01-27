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
  return (
    <Link href={metadata.slug ?? '#'} className={className}>
      <div key={metadata.title}>
        {metadata.featured_image ? (
          <Image
            src={metadata.featured_image as string}
            alt={`Image representing ${metadata.title}`}
            width={100}
            height={100}
            className={`aspect-3/4 w-full object-cover`}
          />
        ) : (
          <div className={`aspect-3/4 w-full bg-gray-200`}></div>
        )}
        {/* <p className="text-xs">{metadata.categories.join(', ')}</p> */}
        <h4 className="text-2xl">{metadata.title}</h4>
      </div>
    </Link>
  );
}
