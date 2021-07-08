import remark from "remark";
import html from "remark-html";
import externalLinks from "remark-external-links";
import highlight from "remark-highlight.js";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(externalLinks).use(highlight).use(html).process(markdown);
  return result.toString();
}
