interface NewArticleProps {
  title: string;
  subtitle: string;
}

const NewArticle = ({ title, subtitle }: NewArticleProps) => {
  return (
    <figure>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </figure>
  );
};

export default NewArticle;
