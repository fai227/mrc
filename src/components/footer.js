import Container from "../components/container";
import ScrollUp from "../components/scrollUp";

function Footer() {
  return (
    <footer className="mt-8 pt-8 pb-32 bg-headerbg text-white text-xs">
      <Container>
        <div className="grid grid-cols-3">
          <div className="col-span-2 mx-2">
            <p className="leading-5">
              お問い合わせ先
              <br />
              〒610-0321 京都府京田辺市多々羅都谷1-3 同志社大学モビリティ研究センター
              <br />
              TEL：0774-65-6297 / E-mail：rc-mblty@mail.doshisha.ac.jp
            </p>
          </div>
          <div className="text-right mx-2">
            <ScrollUp />
            <small>&copy; Doshisha University All Rights Reserved.</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
