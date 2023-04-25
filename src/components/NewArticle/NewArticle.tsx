import { NewArticleSnippet } from '../../../types/api';
import styles from './newarticle.module.scss';

type NewArticleProps = Omit<NewArticleSnippet, 'id'>;

const NewArticle = ({ title, description, link }: NewArticleProps) => {
  return (
    <li className={styles.newArticleContainer}>
      <a href={link}>
        <figure className={styles.newArticle}>
          <h3 className={styles.articleTitle}>{title}</h3>
          <p className={styles.articleDescription}>{description}</p>
        </figure>
      </a>
    </li>
  );
};

export default NewArticle;
