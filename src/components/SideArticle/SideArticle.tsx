import Image from 'next/image';
import { OtherArticleSnippet } from '../../../types/api';

type SideArticleProps = Omit<OtherArticleSnippet, 'id'>;

const SideArticle = ({
  title,
  description,
  link,
  smallImage,
}: SideArticleProps) => {
  return (
    <a href={link}>
      <figure>
        <Image
          src={smallImage}
          width={100}
          height={129}
          alt={`image for article with the title of ${title}`}
        />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </figure>
    </a>
  );
};

export default SideArticle;
