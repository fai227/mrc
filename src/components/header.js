import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";

import Container from "../components/container";

const en = {
  globalNav: { univ: "Doshisha University", privacy: "Privacy policy", sitemap: "Sitemap", home: "Home" },
  logo: "/header/en/logo.png",
  headerMenu: {
    about: "/header/en/about.png",
    issues: "/header/en/issues.png",
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
    issues: "/header/ja/issues.png",
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
          <div className="flex flex-row-reverse items-center gap-x-3 py-3 text-sm mb-4 overflow-x-auto whitespace-nowrap">
            <a href="https://www.doshisha.ac.jp/" target="_blank" rel="noopener noreferrer" className="hover:underline shrink-0">
              {t.globalNav.univ}
            </a>
            <Link href="/privacy">
              <a className="hover:underline shrink-0">{t.globalNav.privacy}</a>
            </Link>
            <Link href="/sitemap">
              <a className="hover:underline shrink-0">{t.globalNav.sitemap}</a>
            </Link>
            <Link href="/">
              <a className="hover:underline shrink-0">{t.globalNav.home}</a>
            </Link>
          </div>
        </Container>
      </div>
      {/* Header Menu */}
      <Container>
        <div className="flex flex-row items-center">
          <Link href="/">
            <a>
              <Image src={t.logo} className="mx-2" alt="logo" width={337} height={26} />
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:opacity-50">
              <Image src={t.headerMenu.about} alt="about" width={110} height={52} />
            </a>
          </Link>
          <Link href="/issues">
            <a className="hover:opacity-50">
              <Image src={t.headerMenu.issues} alt="issues" width={110} height={52} />
            </a>
          </Link>
          <Link href="/activities">
            <a className="hover:opacity-50">
              <Image src={t.headerMenu.activities} alt="activities" width={110} height={52} />
            </a>
          </Link>
          <Link href="/publications">
            <a className="hover:opacity-50">
              <Image src={t.headerMenu.publications} alt="publications" width={110} height={52} />
            </a>
          </Link>
          <Link href="/misc">
            <a className="hover:opacity-50">
              <Image src={t.headerMenu.misc} alt="misc" width={110} height={52} />
            </a>
          </Link>
        </div>
      </Container>
    </header>
  );
}
