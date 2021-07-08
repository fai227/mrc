import Head from "next/head";

import Layout from "../components/layout";
import Header from "../components/header";
import Meta from "../components/meta";
import Container from "../components/container";

function Home() {
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
        </article>
      </Container>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const fullPath = join(process.cwd(), "src/docs/profile.md");
//   const fileContents = fs.readFileSync(fullPath, "utf-8");
//   const { data, content } = matter(fileContents);
//   const htmlContent = await markdownToHtml(content);

//   return { props: { meta: data, content: htmlContent } };
// }

export default Home;
