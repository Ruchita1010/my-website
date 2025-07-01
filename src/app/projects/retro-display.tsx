import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  imgKey: string;
  previewUrl: string;
  sourceCodeUrl: string;
};

type RetroDisplayProps = {
  project: Project;
};

export default function RetroDisplay({ project }: RetroDisplayProps) {
  const { imgKey, previewUrl, sourceCodeUrl } = project;
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
          src={`/projects/${imgKey}.png`}
          width={320}
          height={280}
          alt="Project Screenshot"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2 bg-black">
          <Link
            href={previewUrl}
            target="_blank"
            className=" text-white text-xs px-2 py-1">
            Preview
          </Link>
          <Link
            href={sourceCodeUrl}
            target="_blank"
            className=" text-white text-xs px-2 py-1">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
