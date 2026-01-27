import Image from 'next/image';
import { getProjects, Project } from '@/data/projects/projects';

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

  console.log('project', project);

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
        <p>{project.content}</p>
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
