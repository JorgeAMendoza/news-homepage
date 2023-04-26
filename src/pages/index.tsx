import Head from 'next/head';
import Image from 'next/image';
import { HomeProps } from '../../types/api';
import NewArticle from '@/components/NewArticle/NewArticle';
import SideArticle from '@/components/SideArticle/SideArticle';
import { getHomeArticles } from '../../lib/articles';
import Layout from '@/components/Layout/Layout';
import styles from '../styles/home.module.scss';

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
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>News homepage</h1>

        <section className={styles.headContent}>
          <Image
            src={mainArticle.smallImage}
            width={343}
            height={300}
            alt="image description"
          />
          <h2>{mainArticle.title}</h2>
          <p>{mainArticle.description}</p>
          <a href={mainArticle.link}>read more</a>
        </section>

        <section className={styles.newContent}>
          <h2>New</h2>
          <ul>
            {newArticles.map((article) => (
              <NewArticle
                key={article.id}
                title={article.title}
                description={article.description}
                link={article.link}
              />
            ))}
          </ul>
        </section>
        <section className={styles.otherContent}>
          <h2>Other articles</h2>

          <ol>
            {otherArticles.map((article, index) => (
              <SideArticle
                key={article.id}
                title={article.title}
                description={article.description}
                link={article.link}
                smallImage={article.smallImage}
                articleNumber={index}
              />
            ))}
          </ol>
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
