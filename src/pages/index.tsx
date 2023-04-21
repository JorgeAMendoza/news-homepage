import Head from 'next/head';
import Image from 'next/image';
import { HomeProps } from '../../types/api';
import NewArticle from '@/components/NewArticle/NewArticle';
import SideArticle from '@/components/SideArticle/SideArticle';
import { getHomeArticles } from '../../lib/articles';
import Layout from '@/components/Layout/Layout';

export default function Home({
  mainArticle,
  newArticles,
  otherArticles,
}: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>News Homepage</title>
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
    </Layout>
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
