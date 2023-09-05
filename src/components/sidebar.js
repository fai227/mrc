import Link from "next/link";

import markdownStyles from "../styles/markdown-styles.module.css";

export default function Sidebar({ items, title, type }) {
  return (
    <>
      <h2 className="text-lg font-bold m-2 p-2">{title}</h2>
      <div className={markdownStyles["markdown"]}>
        <ul className="px-2">
          {items.map((item) => (
            <li key={item.sys.id}>
              <Link as={`/${type}/${item.fields.year}`} href={`/${type}/[item.fields.year]`}>
                <a className="text-blue-600 hover:underline">{item.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
