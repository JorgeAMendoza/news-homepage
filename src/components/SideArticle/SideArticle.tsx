import Image from 'next/image';
import { OtherArticleSnippet } from '../../../types/api';
import styles from './side-article.module.scss';

type SideArticleProps = Omit<OtherArticleSnippet, 'id'> & {
  articleNumber: number;
};

const SideArticle = ({
  title,
  description,
  link,
  smallImage,
  articleNumber,
}: SideArticleProps) => {
  return (
    <li className={styles.sideContentContainer}>
      <a href={link}>
        <figure className={styles.sideContent}>
          <Image
            src={smallImage}
            width={100}
            height={129}
            alt={`image for article with the title of ${title}`}
          />
          <div>
            <p className={styles.articleNumber}>{`0${articleNumber + 1}`}</p>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.articleDescription}>{description}</p>
          </div>
        </figure>
      </a>
    </li>
  );
};

export default SideArticle;
