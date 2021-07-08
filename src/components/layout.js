import Meta from "./meta";
import Container from "./container";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="min-w-full text-sm">
      <div className="min-h-screen">
        <main>
          <Meta />
          <Header />
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
