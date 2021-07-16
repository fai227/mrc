import Head from "next/head";
import Link from "next/link";

import { getPage } from "../lib/api";
import { SITE_TITLE } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";
import Layout from "../components/layout";
import Content from "../components/content";

function Home({ title, body }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <img src="/banner.png" alt="banner" width="900px" height="303px" className="mb-6" />

      <Content body={body} />
    </Layout>
  );
}

export async function getStaticProps() {
  const item = await getPage("research");
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, body: body } };
}

export default Home;
