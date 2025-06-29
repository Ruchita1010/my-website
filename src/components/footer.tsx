import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-evenly p-4">
      <Link href="https://github.com/Ruchita1010">Github</Link>
      <Link href="https://x.com/_ruchita1010">Twitter</Link>
      <Link href="https://www.linkedin.com/in/ruchita-gosavi">LinkedIn</Link>
    </footer>
  );
}
