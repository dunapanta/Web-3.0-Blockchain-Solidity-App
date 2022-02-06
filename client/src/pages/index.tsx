import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import {
  Navbar,
  Footer,
  Loader,
  Services,
  Transactions,
  Welcome,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Web 3.0 Blockchain Solidity Example</title>
        <meta name="description" content="Web blockchain solidity example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </main>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Home;
