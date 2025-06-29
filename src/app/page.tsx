'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="space-y-3">
          <p>Hi! I&#39;m Ruchita</p>
          <p>
            I love to build stuff and fall into rabbit holes. I mostly build
            things for the web and somehow ends up making games. I also design
            stuff.
          </p>
          <p>
            Besides programming, I love watching anime, reading manga,
            photography, writing haikus, star gazing, playing sky:cotl, art and
            just understanding things on a deeper level.
          </p>
        </div>
        <div className="mx-auto md:mx-0 shrink-0 w-40 h-52 p-2 bg-white">
          <Image src={`/happy-phos.jpg`} alt="Photo" width={160} height={160} />
          <p className="mt-3 text-blue-700 text-center italic">pfp soon :D</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Image
          src={`/coaly.gif`}
          alt="Photo"
          width={60}
          height={60}
          className="cursor-pointer"
          onClick={() => (document.body.style.backgroundColor = '#000000')}
        />
      </div>
    </div>
  );
}
