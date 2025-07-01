export const refs = {
  nand2Tetris: {
    text: 'Nand2Tetris',
    url: 'https://www.nand2tetris.org/',
  },
  benEater: {
    text: 'Ben Eater',
    url: 'https://eater.net/',
  },
  natureOfCode: {
    text: 'Nature Of Code',
    url: 'https://natureofcode.com/',
  },
  missingSemester: {
    text: 'Missing Semester',
    url: 'https://missing.csail.mit.edu/',
  },
};

export type RefKey = keyof typeof refs;

export type Item = {
  id: number;
  title: string;
  refs: RefKey[];
  done: boolean;
};

export const items: Item[] = [
  {
    id: 1,
    title: 'try to build a computer',
    refs: ['nand2Tetris', 'benEater'],
    done: false,
  },
  {
    id: 2,
    title: 'learn creative coding',
    refs: ['natureOfCode'],
    done: false,
  },
  {
    id: 3,
    title: 'do the',
    refs: ['missingSemester'],
    done: false,
  },
  {
    id: 4,
    title: 'design a PCB',
    refs: [],
    done: false,
  },
  {
    id: 5,
    title: 'build something with arduino',
    refs: [],
    done: false,
  },
  {
    id: 6,
    title: 'learn quantum mechanics',
    refs: [],
    done: false,
  },
  {
    id: 7,
    title: 'try sailing',
    refs: [],
    done: false,
  },
];
