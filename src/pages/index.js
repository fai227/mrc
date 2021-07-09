import Head from "next/head";
import Link from "next/link";

import { getLatestTopics } from "../lib/api";
import { SITE_TITLE } from "../lib/constants";

import Layout from "../components/layout";
import List from "../components/list";

function Home({ items }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

      <img src="/banner.png" alt="banner" width="900px" height="303px" />

      <div className="mx-2 my-4 border border-gray-300 rounded">
        <div className="p-3 border-b-4 border-gray-600 grid grid-cols-3">
          <p className="font-bold col-span-2">What's new</p>
          <Link href="/topics">
            <a className="text-right text-xs hover:underline">過去の情報はこちらから</a>
          </Link>
        </div>
      </div>

      <List items={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getLatestTopics();
  return { props: { items: items } };
}

export default Home;
