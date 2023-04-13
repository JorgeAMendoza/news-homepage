import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>News Homepage</title>
        <meta
          name="description"
          content="news homepage challenge provided thanks to front end mentors"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>News homepage</h1>

        <section>
          <Image
            src="/some-image"
            width={343}
            height={300}
            alt="image description"
          />
          <h2>main article title</h2>
          <p>main article text</p>
          <a href="article">read more</a>
        </section>

        <section>{/* render various new articles here */}</section>
        <section>{/* render other news articles here */}</section>
      </main>
    </>
  );
}
