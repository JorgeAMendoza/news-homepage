export interface ArticleSnippet {
  title: string;
  description: string;
  link: string;
  smallImage: string;
  largeImage: string;
}

export type OtherArticleSnippet = Omit<ArticleSnippet, 'largeImage'>;

export type NewArticleSnippet = Omit<
  ArticleSnippet,
  'smallImage' | 'largeImage'
>;

export interface HomeResponse {
  mainArticle: ArticleSnippet;
  newArticles: NewArticleSnippet[];
  otherArticles: OtherArticleSnippet[];
}
