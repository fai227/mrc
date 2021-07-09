import markdownStyles from "../styles/markdown-styles.module.css";

function Content({ body }) {
  return (
    <article>
      <div className="max-w-full px-4">
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </article>
  );
}

export default Content;
