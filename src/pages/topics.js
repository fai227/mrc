import Head from "next/head";

import { getAllTopics } from "../lib/api";
import { SITE_TITLE } from "../lib/constants";

import Layout from "../components/layout";
import List from "../components/list";

function Topics({ title, items }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <h1 className="px-8 py-4 mx-1 my-6 text-xl bg-gray-700 text-white rounded">{title}</h1>
      <List items={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllTopics();
  const title = "活動内容";
  return { props: { title: title, items: items } };
}

export default Topics;
