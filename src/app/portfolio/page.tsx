import Tile from '@/components/Tile';
import { getProjects } from '@/data/projects/projects';

export default async function CategoryPage() {
  const projects = await getProjects();

  return (
    <main className="mt-page">
      <div className="mx-16 mt-page grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <Tile key={i} metadata={{ ...project }}></Tile>
          ))
        ) : (
          <p>No portfolio items available.</p>
        )}
      </div>
    </main>
  );
}
