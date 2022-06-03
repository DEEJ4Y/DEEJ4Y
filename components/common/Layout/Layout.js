import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import { assetPrefix } from "../../../next.config";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>David Joseph</title>
        <meta
          name="description"
          content="Hi, I'm David. A Full Stack Developer. Have a look at some of my projects and find out more about me."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://davidjoseph.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="David Joseph" />
        <meta
          property="og:description"
          content="Hi, I'm David. A Full Stack Developer. Have a look at some of my projects and find out more about me."
        />
        <meta
          property="og:image"
          content="https://davidjoseph.me/background-image.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="davidjoseph.me" />
        <meta property="twitter:url" content="https://davidjoseph.me/" />
        <meta name="twitter:title" content="David Joseph" />
        <meta
          name="twitter:description"
          content="Hi, I'm David. A Full Stack Developer. Have a look at some of my projects and find out more about me."
        />
        <meta
          name="twitter:image"
          content="https://davidjoseph.me/background-image.webp"
        />
      </Head>
      <Navbar />
      <div>{children || ""}</div>
      <Footer />
    </>
  );
}
