import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getAllActivitiesOthers, getActivitiesOthers } from "../../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Layout from "../../../components/layout";
import Content from "../../../components/content";
import PageTitle from "../../../components/pageTitle";

export default function Activity({ title, etitle, body }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? title : etitle;

  return (
    <Layout>
      <Head>
        <title>
          {page_title} | {site_title}
        </title>
      </Head>
      <PageTitle title={page_title} />
      <Content body={body} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const items = await getAllActivitiesOthers();
  const paths = [];
  items.map((item) => {
    paths.push({
      params: { year: item.fields.year.toString(), id: item.sys.id },
      locale: "ja-JP",
    });
    paths.push({
      params: { year: item.fields.year.toString(), id: item.sys.id },
      locale: "en",
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = await getActivitiesOthers(params.id);
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, etitle: item.fields.etitle, body: body } };
}
