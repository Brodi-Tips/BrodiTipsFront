import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (window && url) setTimeout(() => router.push(String(url)), 2000);
  }, [router, url]);

  return (
    <>
      <Head>
        <title>Bródi Tips</title>
      </Head>
      <img
        className={styles.loading + " index"}
        width={160}
        height={160}
        src="/images/logo.png"
        alt="Bródi Tips"
      />
    </>
  );
}
