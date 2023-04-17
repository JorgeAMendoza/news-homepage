import Head from 'next/head';
import { ReactNode } from 'react';
import NavBar from '../Navbar/NavBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="homepage news website, challenge provided thanks to frontend mentor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <NavBar />
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
}
