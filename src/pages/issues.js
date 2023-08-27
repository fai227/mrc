import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getPage } from "../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";
import Layout from "../components/layout";
import Content from "../components/content";
import PageTitle from "../components/pageTitle";

export default function Issues({ body }) {
  const { locale } = useRouter();
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;
  const page_title = locale === "ja-JP" ? "研究課題" : "Issues";

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

export async function getStaticProps() {
  const jitem = await getPage("issue");
  const body = await markdownToHtml(jitem.fields.body);
  return { props: { body: body } };
}
