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
    <p className={``}>{children}</p>
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

  return (
    <article className="flex flex-wrap">
      <Image
        src={'/#'}
        alt="Hero image"
        fill
        className="relative! h-screen! object-cover"
      />
      <Image src={'/#'} alt="image" height={200} width={300} className="m-8" />
      <section className="m-8">
        <div className="flex border-b border-graphite">
          <p>Project</p>
          <h1>{project.title}</h1>
        </div>
        <div className="flex border-b border-graphite">
          <p>Type</p>
          <p>{project.categories[1]}</p>
        </div>
        <div className="flex border-b border-graphite">
          <p>Location</p>
          <p>{project.location}</p>
        </div>
        <CustomMDX source={project.content} components={overrideComponents} />
      </section>
      <Image
        src={'/#'}
        alt="image"
        height={200}
        width={300}
        className="w-full"
      />
      <Image
        src={'/#'}
        alt="image"
        height={200}
        width={300}
        className="w-1/2"
      />
      <Image src={'/#'} alt="image" height={200} width={300} className="" />
      <Image
        src={'/#'}
        alt="image"
        height={200}
        width={300}
        className="w-full"
      />
      <Image src={'/#'} alt="image" height={200} width={300} className="" />
      <Image
        src={'/#'}
        alt="image"
        height={200}
        width={300}
        className="w-1/2"
      />
    </article>
  );
}
