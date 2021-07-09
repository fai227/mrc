import Head from "next/head";

import { getAllPublications, getPublication } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";
import Sidebar from "../../components/sidebar";

function Publication({ items, title, body }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <PageTitle title={title} />
      <div className="grid grid-cols-5">
        <div className="col-span-4">
          <Content body={body} />
        </div>
        <div className="border-l">
          <Sidebar items={items} title="研究発表" />
        </div>
      </div>
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
  const items = await getAllPublications();
  const item = await getPublication(params.year);
  const body = await markdownToHtml(item.fields.body);
  return { props: { items: items, title: item.fields.title, body: body } };
}

export default Publication;
