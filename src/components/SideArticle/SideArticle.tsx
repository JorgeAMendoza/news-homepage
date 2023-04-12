import Image from 'next/image';

interface SideArticleProps {
  title: string;
  subtitle: string;
  order: number;
  image: string;
}

const SideArticle = ({ title, subtitle, order, image }: SideArticleProps) => {
  return (
    <figure>
      <Image
        src={image}
        width={100}
        height={129}
        alt={`image for article with the title of ${title}`}
      />
      <div>
        <p>{order}</p>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </figure>
  );
};

export default SideArticle;
