import { useRouter } from "next/dist/client/router";

import Container from "../components/container";
import ScrollUp from "../components/scrollUp";

const en = {
  contact: (
    <p className="leading-5">
      <b>
        <u>Contact</u>
      </b>
      <br />
      Doshisha University Mobility Research Center
      <br />
      1-3 Tatara-Miyakodani, Kyotanabe, Kyoto 610-0321 Japan
      <br />
      TEL：+81-774-65-6297 / E-mail：rc-mblty@mail.doshisha.ac.jp
    </p>
  ),
};
const ja = {
  contact: (
    <p className="leading-5">
      <b>
        <u>お問い合わせ</u>
      </b>
      <br />
      〒610-0321 京都府京田辺市多々羅都谷1-3 同志社大学モビリティ研究センター
      <br />
      TEL：0774-65-6297 / E-mail：rc-mblty@mail.doshisha.ac.jp
    </p>
  ),
};

function Footer() {
  const t = useRouter().locale === "ja-JP" ? ja : en;

  return (
    <footer className="mt-8 pt-8 pb-32 bg-headerbg text-white text-xs">
      <Container>
        <div className="grid grid-cols-3">
          <div className="col-span-2 mx-2">{t.contact}</div>
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
