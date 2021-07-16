import Head from "next/head";
import Link from "next/link";

import { getPage } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import LanguageMenu from "../../components/languageMenu";

function Home({ body }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <img src="/banner.png" alt="banner" width="900px" height="303px" className="mb-6" />
      <LanguageMenu ja="/" en="/en" />

      <Content body={body} />
    </Layout>
  );
}

export async function getStaticProps() {
  const item = await getPage("research-en");
  const body = await markdownToHtml(item.fields.body);
  return { props: { body: body } };
}

export default Home;
