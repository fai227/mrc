import Head from "next/head";

import { getAllPublications, getPublication } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from "../../components/layout";
import Content from "../../components/content";

function Publication({ title, body }) {
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

export async function getStaticPaths() {
  const items = await getAllPublications();
  const paths = items.map((item) => ({
    params: { year: item.fields.year.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = await getPublication(params.year);
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, body: body } };
}

export default Publication;
