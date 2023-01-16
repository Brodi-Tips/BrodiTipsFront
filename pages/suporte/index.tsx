import styles from "styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const url = "http://t.me/julioflima";
    setTimeout(() => router.push(String(url)), 2000);
  }, [router]);

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
