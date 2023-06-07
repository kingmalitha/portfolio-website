import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills/Skills";
import Loader from "@/components/Loader";
import { useState } from "react";
import Portfolio from "@/components/portfolio/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleLoaderLoaded = () => {};
  return (
    <div>
      <Head>
        <title>Malitha Sandaruwan</title>
        <link rel="icon" href="/image3.png" />
      </Head>
      <>
        <Header />

        <section id="hero">
          <Hero />
        </section>

        {/* <About />
        <Skills />
        <section id="portfolio">
          <Portfolio />
        </section> */}
      </>
    </div>
  );
}
