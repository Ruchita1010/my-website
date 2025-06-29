import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  img: string;
  live: string;
  github: string;
};

type RetroDisplayProps = {
  project: Project;
};

const projects = [
  {
    id: 1,
    img: 'novas-strike',
    live: 'https://novas-strike.onrender.com',
    github: 'https://github.com/Ruchita1010/novas-strike',
  },
  {
    id: 2,
    img: 'haikuist',
    live: 'https://haikuist.netlify.app',
    github: 'https://github.com/Ruchita1010/haikuist',
  },
  {
    id: 3,
    img: 'homeward-bound',
    live: 'https://ruchita1010.github.io/homeward-bound/',
    github: 'https://github.com/Ruchita1010/homeward-bound',
  },
  {
    id: 4,
    img: 'aoi-sekai',
    live: 'https://marketplace.visualstudio.com/items?itemName=RuchitaGosavi.aoi-sekai',
    github: 'https://github.com/Ruchita1010/aoi-sekai',
  },
  {
    id: 5,
    img: 'maze-escape',
    live: 'https://www.reddit.com/r/redditapptest/comments/1hglreg/escape_the_maze/',
    github: 'https://github.com/Ruchita1010/maze-escape',
  },
  {
    id: 6,
    img: 'resume-generator',
    live: 'https://ruchita1010.github.io/resume-generator/',
    github: 'https://github.com/Ruchita1010/resume-generator',
  },
  {
    id: 7,
    img: 'attack-on-cards',
    live: 'https://ruchita1010.github.io/attack-on-cards/',
    github: 'https://github.com/Ruchita1010/attack-on-cards',
  },
  {
    id: 8,
    img: 'mini-message-board',
    live: 'https://mini-message-board-xenz.onrender.com/',
    github: 'https://github.com/Ruchita1010/mini-message-board',
  },
  {
    id: 9,
    img: 'battleship',
    live: 'https://ruchita1010.github.io/battleship/',
    github: 'https://github.com/Ruchita1010/battleship',
  },
];

function RetroDisplay({ project }: RetroDisplayProps) {
  const { img, live, github } = project;
  return (
    <div className="relative w-[200px] h-[200px]">
      <Image
        src="/retro-display.png"
        width={200}
        height={200}
        alt="TV Frame"
        className="absolute z-10 top-0 left-0 pointer-events-none"
      />

      <div className="absolute z-0 top-[20px] left-[20px] w-[160px] h-[140px] overflow-hidden rounded-4xl">
        <Image
          src={`/projects/${img}.png`}
          width={320}
          height={280}
          alt="Project Screenshot"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-3 left-0 w-[98%] flex justify-center gap-2 bg-black">
          <Link href={live} className=" text-white text-xs px-2 py-1 rounded ">
            Live
          </Link>
          <Link
            href={github}
            className=" text-white text-xs px-2 py-1 rounded ">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-around">
      {projects.map((project) => {
        return <RetroDisplay key={project.id} project={project} />;
      })}
    </div>
  );
}
