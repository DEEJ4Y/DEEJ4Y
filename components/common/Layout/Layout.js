import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import { assetPrefix } from "../../../next.config";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>David Joseph</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Hi, I'm David. A Full Stack Developer."
        />
        <meta
          name="og:title"
          property="og:title"
          content="David Joseph's Personal Website"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Hi, I'm David. A Full Stack Developer. Have a look at some of my projects and find out more about me."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://deej4y.github.io/DEEJ4Y"
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content="deej4y.github.io"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://deej4y.github.io/DEEJ4Y/background-image.webp"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={assetPrefix ? assetPrefix + "/favicon.png" : "/favicon.png"}
        ></link>
      </Head>
      <Navbar />
      <div>{children || ""}</div>
      <Footer />
    </>
  );
}
