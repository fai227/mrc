import Head from "next/head";
import Link from "next/link";

import { getAllPublications } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import markdownStyles from "../../styles/markdown-styles.module.css";

function Index({ title, items }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <PageTitle title={title} />
      <div className={markdownStyles["markdown"]}>
        <ul>
          {items.map((item) => (
            <li key={item.sys.id}>
              <Link as={`/publications/${item.fields.year}`} href="/publications/[item.fields.year]">
                <a className="text-blue-600 hover:underline">{item.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllPublications();
  const title = "研究発表";
  return { props: { title: title, items: items } };
}

export default Index;
