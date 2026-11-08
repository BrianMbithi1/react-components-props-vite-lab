// Article: a single post (props: title, date, preview). Parent: ArticleList
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;