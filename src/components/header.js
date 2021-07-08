import Container from "../components/container";

function Header() {
  return (
    <header>
      <div className="bg-headerbg text-white">
        <Container>
          <div className="flex flex-row-reverse py-3 text-xs mb-4">
            <a href="/" className="mx-3 hover:underline">
              同志社大学
            </a>
            <a href="/" className="mx-3 hover:underline">
              個人情報保護について
            </a>
            <a href="/" className="mx-3 hover:underline">
              サイトマップ
            </a>
            <a href="/" className="mx-3 hover:underline">
              Home
            </a>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-row">
          <a href="/">
            <img src="/header/logo.png" className="py-3 mx-2" />
          </a>
          <a href="/" className="hover:opacity-50">
            <img src="/header/menu01.png" />
          </a>
          <a href="/" className="hover:opacity-50">
            <img src="/header/menu02.png" />
          </a>
          <a href="/" className="hover:opacity-50">
            <img src="/header/menu03.png" />
          </a>
          <a href="/" className="hover:opacity-50">
            <img src="/header/menu04.png" />
          </a>
          <a href="/" className="hover:opacity-50">
            <img src="/header/menu05.png" />
          </a>
        </div>
      </Container>
    </header>
  );
}

export default Header;
