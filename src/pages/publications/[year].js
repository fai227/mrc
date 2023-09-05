import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import { getAllPublications, getPublication, getEnAllPublications, getEnPublication } from "../../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Layout from "../../components/layout";
import Content from "../../components/content";
import PageTitle from "../../components/pageTitle";
import Sidebar from "../../components/sidebar";

export default function Publication({ jitems, eitems, jtitle, etitle, jbody, ebody }) {
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
          <Sidebar items={items} title={sidebar_title} type="publications" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const jitems = await getAllPublications();
  const eitems = await getEnAllPublications();
  const paths = [];
  jitems.map((jitem) => {
    paths.push({
      params: { year: jitem.fields.year.toString() },
      locale: "ja-JP",
    });
  });
  eitems.map((eitem) => {
    paths.push({
      params: { year: eitem.fields.year.toString() },
      locale: "en",
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const jitems = await getAllPublications();
  const eitems = await getEnAllPublications();
  const jitem = await getPublication(params.year);
  const eitem = await getEnPublication(params.year);
  const jbody = await markdownToHtml(jitem.fields.body);
  const ebody = await markdownToHtml(eitem.fields.body);
  return { props: { jitems: jitems, eitems: eitems, jtitle: jitem.fields.title, etitle: eitem.fields.title, jbody: jbody, ebody: ebody } };
}
