import Link from "next/link";

import Container from "../components/container";

function Header() {
  return (
    <header>
      <div className="bg-headerbg text-white">
        <Container>
          <div className="flex flex-row-reverse py-3 text-xs mb-4">
            <a href="https://www.doshisha.ac.jp/" target="_blank" rel="noopener noreferrer" className="mx-3 hover:underline">
              同志社大学
            </a>
            <Link href="/privacy">
              <a className="mx-3 hover:underline">個人情報保護について</a>
            </Link>
            <Link href="/sitemap">
              <a className="mx-3 hover:underline">サイトマップ</a>
            </Link>
            <Link href="/">
              <a className="mx-3 hover:underline">Home</a>
            </Link>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-row">
          <Link href="/">
            <a>
              <img src="/header/logo.png" className="py-3 mx-2" />
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:opacity-50">
              <img src="/header/menu01.png" />
            </a>
          </Link>
          <Link href="/research">
            <a className="hover:opacity-50">
              <img src="/header/menu02.png" />
            </a>
          </Link>
          <Link href="/topics">
            <a className="hover:opacity-50">
              <img src="/header/menu03.png" />
            </a>
          </Link>
          <Link href="/publications/2018">
            <a className="hover:opacity-50">
              <img src="/header/menu04.png" />
            </a>
          </Link>
          <Link href="/misc">
            <a className="hover:opacity-50">
              <img src="/header/menu05.png" />
            </a>
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
