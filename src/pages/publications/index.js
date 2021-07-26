import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getLatestPublication, getAllPublications, getEnLatestPublication, getEnAllPublications } from "../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";
import Sidebar from "../../components/sidebar";

export default function Index({ jbody, ebody, jtitle, etitle, jitems, eitems }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? jtitle : etitle;
  const sidebar_title = locale === "ja-JP" ? "研究発表" : "Publications";
  const body = locale === "ja-JP" ? jbody : ebody;
  const items = locale === "ja-JP" ? jitems : eitems;

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
          <Sidebar items={items} title={sidebar_title} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const latestJItem = await getLatestPublication();
  const latestEItem = await getEnLatestPublication();
  const jbody = await markdownToHtml(latestJItem.fields.body);
  const ebody = await markdownToHtml(latestEItem.fields.body);
  const jitems = await getAllPublications();
  const eitems = await getEnAllPublications();
  return {
    props: { jbody: jbody, ebody: ebody, jtitle: latestJItem.fields.title, etitle: latestEItem.fields.title, jitems: jitems, eitems: eitems },
  };
}
