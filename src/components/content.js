import markdownStyles from "../styles/markdown-styles.module.css";

function Content({ title, body }) {
  return (
    <article>
      <h1 className="px-8 py-4 mx-1 my-6 text-xl bg-gray-700 text-white rounded">{title}</h1>
      <div className="max-w-full px-4">
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </article>
  );
}

export default Content;
