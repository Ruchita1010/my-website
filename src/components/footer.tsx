import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-evenly p-4">
      <Link href="https://github.com/Ruchita1010" target="_blank">
        Github
      </Link>
      <Link href="https://x.com/_ruchita1010" target="_blank">
        Twitter
      </Link>
      <Link href="https://www.linkedin.com/in/ruchita-gosavi" target="_blank">
        LinkedIn
      </Link>
    </footer>
  );
}
