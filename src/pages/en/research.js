import Head from "next/head";

import { getPage } from "../../lib/api";
import { SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";
import LanguageMenu from "../../components/languageMenu";

function Research({ title, body }) {
  return (
    <Layout>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>
      <LanguageMenu ja="/research" en="/en/research" />
      <PageTitle title={title} />
      <Content body={body} />
    </Layout>
  );
}

export async function getStaticProps() {
  const item = await getPage("research-en");
  const body = await markdownToHtml(item.fields.body);
  return { props: { title: item.fields.title, body: body } };
}

export default Research;
