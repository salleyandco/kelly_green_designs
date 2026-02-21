import Image from 'next/image';
import { getProjects, Project } from '@/data/projects/projects';
import { CustomMDX } from '@/helpers/mdx';

export default async function Single({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const data = getProjects();

  const project: Project | undefined = data.find(
    (project) => project.slug === slug
  );

  if (!project) return <p>Project not found</p>;

  const Title = ({ children }: { children: React.ReactNode }) => (
    <h1 className="my-[1em] text-2xl">{children}</h1>
  );
  const Body = ({ children }: { children: React.ReactNode }) => (
    <p className={'mb-4'}>{children}</p>
  );
  const Heading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="my-[1em] mt-10 mb-4 text-xl">{children}</h2>
  );
  const List = ({ children }: { children: React.ReactNode }) => (
    <ul className="my-6 list-disc space-y-2 pl-6 text-base leading-7">
      {children}
    </ul>
  );
  const OrderedList = ({ children }: { children: React.ReactNode }) => (
    <ol className="my-6 list-decimal space-y-2 pl-6 text-base leading-7">
      {children}
    </ol>
  );

  const overrideComponents = {
    h1: Title,
    p: Body,
    h2: Heading,
    ul: List,
    ol: OrderedList,
  };

  const renderImages = () => {
    return project.images.map((image, index) => (
      <Image
        key={index}
        src={image as string}
        alt={`Image ${index + 1}`}
        height={2000}
        width={3000}
        className="order-last md:mx-8 md:w-1/3"
      />
    ));
  };

  const classNames = [
    '[&>img]:first-of-type:relative [&>img]:first-of-type:order-1 [&>img]:first-of-type:m-0 [&>img]:first-of-type:h-screen [&>img]:first-of-type:w-screen [&>img]:first-of-type:object-cover',
    '[&>img]:nth-of-type-[2]:order-3 md:[&>img]:nth-of-type-[2]:w-1/2 [&>img]:nth-of-type-[2]:ml-0',
    '[&>img]:nth-of-type-[3n+3]:w-full [&>img]:nth-of-type-[3n+3]:m-0',
    'md:[&>img]:nth-of-type-[4n+4]:w-1/2',
  ];

  return (
    <article
      className={`flex flex-wrap items-center justify-evenly gap-8 ${classNames.join(' ')}`}
    >
      <header className="order-2 mx-8 my-8 flex shrink grow-0 flex-col self-stretch text-xs md:mr-0 md:basis-[calc(50%-8rem)] md:text-sm">
        <div className="mb-10 grid grid-cols-[max-content_auto] gap-2">
          {project.title && (
            <>
              <p className="mr-8">Event</p>
              <h1>{project.title}</h1>
            </>
          )}
          {project.categories.length > 0 && (
            <>
              <p className="mr-8">Event Type</p>
              <p>{project.categories[0]}</p>
            </>
          )}
          {project.location && (
            <>
              <p className="mr-8">Location</p>
              <p>{project.location}</p>
            </>
          )}
          {project.photo_credit && (
            <>
              <p className="mr-8">Photographer</p>
              <p>{project.photo_credit}</p>
            </>
          )}
        </div>
        <section>
          <CustomMDX source={project.content} components={overrideComponents} />
        </section>
      </header>
      {renderImages()}
    </article>
  );
}
