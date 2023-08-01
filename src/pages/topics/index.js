import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getAllTopics } from "../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../lib/constants";
import Layout from "../../components/layout";
import List from "../../components/list";
import PageTitle from "../../components/pageTitle";

function Index({ items }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? "研究活動" : "Activities";

  return (
    <Layout>
      <Head>
        <title>
          {page_title} | {site_title}
        </title>
      </Head>
      <PageTitle title={page_title} />
      <List items={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getAllTopics();
  return { props: { items: items } };
}

export default Index;
