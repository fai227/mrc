import Head from "next/head";

function Meta() {
  return (
    <Head>
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" /> */}
      {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" /> */}
      {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" /> */}
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      {/* <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#550071" /> */}
      {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      <meta name="msapplication-TileColor" content="#550071" />
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      <meta name="theme-color" content="#550071" />
      <meta
        name="description"
        content="同志社大学 モビリティ研究センターでは、情報システム、制御システム、社会システムが密接に協調・統合し、さらに生体情報を考慮することで、将来に向けたモビリティ変革を実現するための新技術の研究開発および社会への普及検討を行っております。"
      />
      {/* <meta property="og:image" content="https://mrc.doshisha.ac.jp/ogp/ogp.png" /> */}

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Doshisha University" />
      <meta property="og:url" content="https://mrc.doshisha.ac.jp/" />
      <meta property="og:locale" content="ja_JP" />
      {/* <meta property="og:image" content="https://mrc.doshisha.ac.jp/ogp/ogp.png" /> */}
      <meta property="og:title" content="同志社大学 モビリティ研究センター" />
      <meta
        property="og:description"
        content="同志社大学 モビリティ研究センターでは、情報システム、制御システム、社会システムが密接に協調・統合し、さらに生体情報を考慮することで、将来に向けたモビリティ変革を実現するための新技術の研究開発および社会への普及検討を行っております。"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default Meta;
