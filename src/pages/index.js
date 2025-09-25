import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

import { getPage } from "../lib/api";
import { J_SITE_TITLE, E_SITE_TITLE } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";
import Layout from "../components/layout";
import Content from "../components/content";

export default function Home({ jbody, ebody }) {
  const { locale } = useRouter();
  const body = locale === "ja-JP" ? jbody : ebody;
  const site_title = locale === "ja-JP" ? J_SITE_TITLE : E_SITE_TITLE;

  return (
    <Layout>
      <Head>
        <title>{site_title}</title>
      </Head>
      <h1 style={{ display: "none" }}>{site_title}</h1>
      <picture>
        <source
          srcSet="/small_banner.png"
          media="(max-width: 640px)"
        />
        <img
          src="/banner.png"
          alt="banner"
          width={900}
          height={303}
          className="mb-6 w-full h-auto"
          loading="eager"
          decoding="async"
        />
      </picture>
      <Content body={body} />
    </Layout>
  );
}

export async function getStaticProps() {
  const jitem = await getPage("top-page");
  const eitem = await getPage("top-page-en");
  const jbody = await markdownToHtml(jitem.fields.body);
  const ebody = await markdownToHtml(eitem.fields.body);
  return { props: { jbody: jbody, ebody: ebody } };
}
