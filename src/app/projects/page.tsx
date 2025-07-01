import { projects } from '@/data/projects';
import RetroDisplay from './retro-display';

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-around">
      {projects.map((project) => {
        return <RetroDisplay key={project.id} project={project} />;
      })}
    </div>
  );
}
