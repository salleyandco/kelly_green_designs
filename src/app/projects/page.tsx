import Tile from '@/components/Tile';
import { getProjects } from '@/data/projects/projects';

export default async function CategoryPage() {
  const projects = await getProjects();

  return (
    <main>
      <div className="mx-16 mt-53 grid grid-cols-4 gap-4">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <Tile key={i} metadata={{ ...project }}></Tile>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </main>
  );
}
