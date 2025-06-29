import Link from 'next/link';

const refLinks = {
  nand2Tetris: {
    text: 'Nand2Tetris',
    href: 'https://www.nand2tetris.org/',
  },
  benEater: {
    text: 'Ben Eater',
    href: 'https://eater.net/',
  },
  natureOfCode: {
    text: 'Nature Of Code',
    href: 'https://natureofcode.com/',
  },
  missingSemester: {
    text: 'Missing Semester',
    href: 'https://missing.csail.mit.edu/',
  },
};

type RefKey = keyof typeof refLinks;

type Item = {
  id: number;
  title: string;
  refs: RefKey[];
  done: boolean;
};

const items: Item[] = [
  {
    id: 1,
    title: 'try to build a computer',
    refs: ['nand2Tetris', 'benEater'],
    done: true,
  },
  {
    id: 2,
    title: 'learn creative coding',
    refs: ['natureOfCode'],
    done: true,
  },
  {
    id: 3,
    title: 'do the',
    refs: ['missingSemester'],
    done: true,
  },
  {
    id: 4,
    title: 'design a PCB',
    refs: [],
    done: true,
  },
  {
    id: 5,
    title: 'build something with arduino',
    refs: [],
    done: true,
  },
  {
    id: 6,
    title: 'learn quantum mechanics',
    refs: [],
    done: true,
  },
  {
    id: 7,
    title: 'try sailing',
    refs: [],
    done: true,
  },
];

export default function Random() {
  return (
    <div>
      <h1>I want to...</h1>
      <div className="mt-10 space-y-3">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.title} </span>
              {item.refs.length > 0 && (
                <span>
                  {'[ '}
                  {item.refs?.map((refKey, index) => {
                    const ref = refLinks[refKey];
                    const isLast = index === item.refs.length - 1;
                    return (
                      <span key={refKey}>
                        <Link href={ref.href} className="underline">
                          {ref.text}
                        </Link>
                        {!isLast && ' | '}
                      </span>
                    );
                  })}
                  {' ]'}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
