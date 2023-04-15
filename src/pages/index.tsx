import Head from 'next/head';
import Image from 'next/image';
import { HomeProps } from '../../types/api';
import NewArticle from '@/components/NewArticle/NewArticle';
import SideArticle from '@/components/SideArticle/SideArticle';
import { getHomeArticles } from '../../lib/articles';

export default function Home({
  mainArticle,
  newArticles,
  otherArticles,
}: HomeProps) {
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
            src={mainArticle.largeImage}
            width={343}
            height={300}
            alt="image description"
          />
          <h2>{mainArticle.title}</h2>
          <p>{mainArticle.description}</p>
          <a href={mainArticle.link}>read more</a>
        </section>

        <section>
          <h2>New</h2>
          <ul>
            {newArticles.map((article) => (
              <li key={article.id}>
                <NewArticle
                  title={article.title}
                  description={article.description}
                  link={article.link}
                />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Other articles</h2>
          {otherArticles.map((article) => (
            <li key={article.id}>
              <SideArticle
                title={article.title}
                description={article.description}
                link={article.link}
                smallImage={article.smallImage}
              />
            </li>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const articles = await getHomeArticles();
  return {
    props: {
      mainArticle: articles.mainArticle,
      newArticles: articles.newArticles,
      otherArticles: articles.otherArticles,
    },
  };
}
