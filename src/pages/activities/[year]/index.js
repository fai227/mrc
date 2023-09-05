import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getAllActivities, getActivity, getAllActivitiesOthers } from "../../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Layout from "../../../components/layout";
import Content from "../../../components/content";
import List from "../../../components/list";
import PageTitle from "../../../components/pageTitle";
import Sidebar from "../../../components/sidebar";

export default function Activity({ items, others, jtitle, etitle, body }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? jtitle : etitle;
  const sidebar_title = locale === "ja-JP" ? "研究活動" : "Activities";

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
          <List items={others} />
        </div>
        <div className="border-l">
          <Sidebar items={items} title={sidebar_title} type="activities" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const items = await getAllActivities();
  const paths = [];
  items.map((item) => {
    paths.push({
      params: { year: item.fields.year.toString() },
      locale: "ja-JP",
    });
    paths.push({
      params: { year: item.fields.year.toString() },
      locale: "en",
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const items = await getAllActivities();
  const item = await getActivity(params.year);
  const others = await getAllActivitiesOthers(params.year);
  const body = await markdownToHtml(item.fields.body);
  return { props: { items: items, others: others, jtitle: item.fields.title, etitle: item.fields.etitle, body: body } };
}
