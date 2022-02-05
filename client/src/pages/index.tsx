import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web 3.0 Blockchain Solidity Example</title>
        <meta name="description" content="Web blockchain solidity example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Web 3.0 Blockchain Solidity Example</h1>
      </main>
    </div>
  );
};

export default Home;
