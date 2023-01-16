import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      document.documentElement &&
      document.documentElement.classList &&
      document.documentElement.classList.add("theme_dark");
  }, []);

  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="manifest.json" />
        <meta property="og:title" content="Bródi Tips" />
        <meta property="og:site_name" content="Bródi Tips" />
        <meta name="author" content="Bródi Tips" />
        <meta
          name="description"
          content="Seu robô de apostas! Plataforma para seguir sinais de apostas validadas."
        />
        <meta
          property="og:description"
          content="Seu robô de apostas! Plataforma para seguir sinais de apostas validadas."
        />
        <meta name="keywords" content="tip, bot, telegram, bet, apostas" />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logo.png"
        />
        <link rel="alternate icon" href="/images/logo.png" type="image/png" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
