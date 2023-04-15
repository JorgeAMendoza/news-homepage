import articleData from '../public/articles.json';

export async function getHomeArticles() {
  return {
    mainArticle: articleData.mainArticle,
    newArticles: articleData.newArticles,
    otherArticles: articleData.otherArticles,
  };
}
