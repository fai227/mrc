import Head from "next/head";

import { getTopics, getAllTopics } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";

function Publication({ title, body }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <PageTitle title={title} />
      <Content body={body} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const items = await getAllTopics();
  const paths = items.map((item) => ({
    params: { id: item.sys.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = await getTopics(params.id);
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, body: body } };
}

export default Publication;
