import Button from '@/components/Button';
import ScrollingImage from '@/components/ScrollingImage';
import Tile from '@/components/Tile';
import { getProjects } from '@/data/projects/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = getProjects();

  return (
    <>
      <section className="relative h-screen bg-gray-200">
        <Image
          src={'/HS_A0268.jpg'}
          alt="Kelly Green Designs"
          fill
          className="object-cover"
        />
        <h1 className="absolute bottom-8 left-8 text-2xl font-bold">
          Evoking emotions
          <i className="ml-1 font-serif font-normal">
            Create lasting memories…
          </i>
        </h1>
      </section>
      <section className="mx-16 my-44">
        <div className="mb-16 flex items-center justify-between border-b pb-2">
          <h3 className="font-display text-3xl">Engagements</h3>
          <Link href="/collections">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
            // TODO: Update to filter by collection type
            projects.map((project) => (
              <Tile
                key={project.slug}
                metadata={project}
                className="sm:max-md:nth-[3n+1]:hidden md:max-lg:last-of-type:hidden"
              />
            ))
          }
        </div>
      </section>
      <section className="my-44 text-center">
        <h2
          className="mb-6 font-display tracking-tight lg:text-6xl"
          style={{ fontSize: 'clamp(1em,6vi,var(--text-6xl))' }}
        >
          <span className="block uppercase">Bespoke floral experiences</span>
          embodying your audience & personal style.
        </h2>
        <Button variant="hollow" href="/services">
          Learn More
        </Button>
      </section>
      <ScrollingImage />
    </>
  );
}
