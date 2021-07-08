import Head from "next/head";

import { getLatestTopics } from "../lib/api";

import Layout from "../components/layout";
import Header from "../components/header";
import Meta from "../components/meta";
import Container from "../components/container";
import List from "../components/index/list";

function Home({ items }) {
  return (
    <Layout>
      <Header />
      <Container>
        <article>
          <Meta />
          <Head>
            <title>同志社大学 モビリティ研究センター</title>
          </Head>
          <img src="/banner.png" />
          <List items={items} />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const items = await getLatestTopics();
  console.log(items);
  return { props: { items: items } };
}

export default Home;
