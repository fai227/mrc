import Head from "next/head";

import { getPage } from "../lib/api";
import { SITE_TITLE } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";

import Layout from "../components/layout";
import Content from "../components/content";

function Research({ title, body }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <Content title={title} body={body} />
    </Layout>
  );
}

export async function getStaticProps() {
  const item = await getPage("research");
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, body: body } };
}

export default Research;
