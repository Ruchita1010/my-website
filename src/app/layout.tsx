import type { Metadata } from 'next';
import { Sometype_Mono, VT323 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const geistSans = Sometype_Mono({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = VT323({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Ruchita (⌐■_■)',
  description: 'My little corner on the internet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-center antialiased min-h-screen max-w-screen-md mx-auto`}>
        <Header />
        <main className="flex-1 mt-10 mb-20 px-4 md:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
