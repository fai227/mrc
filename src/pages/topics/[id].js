import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getTopics, getAllTopics } from "../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";

export default function Publication({ title, etitle, body }) {
  const { locale } = useRouter();
  const site_title = locale === "ja" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja" ? title : etitle;

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
  const items = await getAllTopics();
  const paths = [];
  items.map((item) => {
    paths.push({
      params: { id: item.sys.id },
      locale: "ja",
    });
    paths.push({
      params: { id: item.sys.id },
      locale: "en",
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = await getTopics(params.id);
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, etitle: item.fields.etitle, body: body } };
}
