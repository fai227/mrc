import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export default function ScrollUp() {
  return (
    <div className="my-3">
      <a onClick={scroll.scrollToTop} className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-60 cursor-pointer">
        ↑ Top page{" "}
      </a>
    </div>
  );
}
