import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getLatestActivity, getAllActivities } from "../../lib/api";
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
  const sidebar_title = locale === "ja-JP" ? "研究活動一覧" : "Activity List";

  return (
    <Layout>
      <Head>
        <title>
          {page_title} | {site_title}
        </title>
      </Head>
      <PageTitle title={page_title} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Content body={body} />
        </div>
        <div className="border-t pt-6 md:border-t-0 md:border-l px-4 md:pt-0 md:pl-6">
          <Sidebar items={items} title={sidebar_title} type="activities" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const latestItem = await getLatestActivity();
  const body = await markdownToHtml(latestItem.fields.body);
  const items = await getAllActivities();
  return {
    props: { body: body, jtitle: latestItem.fields.title, etitle: latestItem.fields.etitle, items: items },
  };
}

export default Index;
