import { NewArticleSnippet } from '../../../types/api';

type NewArticleProps = Omit<NewArticleSnippet, 'id'>;

const NewArticle = ({ title, description, link }: NewArticleProps) => {
  return (
    <a href={link}>
      <figure>
        <h3>{title}</h3>
        <p>{description}</p>
      </figure>
    </a>
  );
};

export default NewArticle;
