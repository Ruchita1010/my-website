import Link from 'next/link';

export default async function Blogs() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" w-full border border-white flex flex-wrap md:flex-nowrap p-2 gap-3">
          <Link href="https://ruchitagosavi.hashnode.dev/crafting-3d-experiences-with-react-three-fiber-core-concepts-and-scene-creation">
            <h2 className="flex-1 tracking-wide">
              React Three Fiber: Core Concepts and Scene Creation
            </h2>
          </Link>

          <div className="flex md:flex-col w-full md:w-auto justify-between gap-4 text-sm italic">
            <span className="whitespace-nowrap uppercase">June 2023</span>
            <span>000001</span>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center">(。・・)ノ | -- WIP -- |</p>
    </>
  );
}
