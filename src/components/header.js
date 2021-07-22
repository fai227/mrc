import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import Container from "../components/container";

const en = {
  globalNav: { univ: "Doshisha University", privacy: "Privacy policy", sitemap: "Sitemap", home: "Home" },
  logo: "/header/en/logo.png",
  headerMenu: {
    about: "/header/en/about.png",
    research: "/header/en/research.png",
    activities: "/header/en/activities.png",
    publications: "/header/en/publications.png",
    misc: "/header/en/misc.png",
  },
};
const ja = {
  globalNav: { univ: "同志社大学", privacy: "個人情報保護について", sitemap: "サイトマップ", home: "Home" },
  logo: "/header/ja/logo.png",
  headerMenu: {
    about: "/header/ja/about.png",
    research: "/header/ja/research.png",
    activities: "/header/ja/activities.png",
    publications: "/header/ja/publications.png",
    misc: "/header/ja/misc.png",
  },
};

export default function Header() {
  const t = useRouter().locale === "ja-JP" ? ja : en;

  return (
    <header>
      {/* Global Nav */}
      <div className="bg-headerbg text-white">
        <Container>
          <div className="flex flex-row-reverse py-3 text-xs mb-4">
            <a href="https://www.doshisha.ac.jp/" target="_blank" rel="noopener noreferrer" className="mx-3 hover:underline">
              {t.globalNav.univ}
            </a>
            <Link href="/privacy">
              <a className="mx-3 hover:underline">{t.globalNav.privacy}</a>
            </Link>
            <Link href="/sitemap">
              <a className="mx-3 hover:underline">{t.globalNav.sitemap}</a>
            </Link>
            <Link href="/">
              <a className="mx-3 hover:underline">{t.globalNav.home}</a>
            </Link>
          </div>
        </Container>
      </div>
      {/* Header Menu */}
      <Container>
        <div className="flex flex-row">
          <Link href="/">
            <a>
              <img src={t.logo} className="py-3 mx-2" alt="logo" width="337px" height="26px" />
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:opacity-50">
              <img src={t.headerMenu.about} alt="about" width="110px" height="52px" />
            </a>
          </Link>
          <Link href="/research">
            <a className="hover:opacity-50">
              <img src={t.headerMenu.research} alt="research" width="110px" height="52px" />
            </a>
          </Link>
          <Link href="/topics">
            <a className="hover:opacity-50">
              <img src={t.headerMenu.activities} alt="topics" width="110px" height="52px" />
            </a>
          </Link>
          <Link href="/publications">
            <a className="hover:opacity-50">
              <img src={t.headerMenu.publications} alt="publications" width="110px" height="52px" />
            </a>
          </Link>
          <Link href="/misc">
            <a className="hover:opacity-50">
              <img src={t.headerMenu.misc} alt="misc" width="110px" height="52px" />
            </a>
          </Link>
        </div>
      </Container>
    </header>
  );
}
