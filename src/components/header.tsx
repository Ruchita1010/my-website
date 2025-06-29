import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6">
      <nav className="flex justify-center">
        <ul className="text-lg flex items-center gap-12 font-[family-name:var(--font-geist-sans)]">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link href="/random">RANDOM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
