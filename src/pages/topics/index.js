import Head from "next/head";

import { getAllTopics } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import Layout from "../../components/layout";
import List from "../../components/list";
import PageTitle from "../../components/pageTitle";

function Index({ title, items }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <PageTitle title={title} />
      <List items={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllTopics();
  const title = "活動内容";
  return { props: { title: title, items: items } };
}

export default Index;
