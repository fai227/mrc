import "highlight.js/styles/github.css";
import "../styles/global.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID}
      />
    </>
  );
}

export default MyApp;
