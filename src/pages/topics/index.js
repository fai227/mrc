import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getLatestTopic, getAllTopics } from "../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";
import Sidebar from "../../components/sidebar";

function Index({ body, jtitle, etitle, items }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? jtitle : etitle;
  const sidebar_title = locale === "ja-JP" ? "研究活動" : "Topics";

  return (
    <Layout>
      <Head>
        <title>
          {page_title} | {site_title}
        </title>
      </Head>
      <PageTitle title={page_title} />
      <div className="grid grid-cols-5">
        <div className="col-span-4">
          <Content body={body} />
        </div>
        <div className="border-l">
          <Sidebar items={items} title={sidebar_title} type="topics" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const latestItem = await getLatestTopic();
  const body = await markdownToHtml(latestItem.fields.body);
  const items = await getAllTopics();
  return {
    props: { body: body, jtitle: latestItem.fields.title, etitle: latestItem.fields.etitle, items: items },
  };
}

export default Index;
