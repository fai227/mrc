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
  const sidebar_title = locale === "ja-JP" ? "研究発表一覧" : "Publication List";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Content body={body} />
        </div>
        <div className="border-t pt-6 md:border-t-0 md:border-l px-4 md:pt-0 md:pl-6">
          <Sidebar items={items} title={sidebar_title} type="publications" />
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
