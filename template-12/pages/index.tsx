/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import NavComponent from "../components/NavComponent";
import NftCollection from "../components/NftCollection";
import TopCollections from "../components/TopCollections";

export default function Home() {
  return (
    <article className="bg-[#121212] backdrop-blur-lg text-white font-poppins">
      <NavComponent />
      <HeroSection />

      <TopCollections />
      <NftCollection />
      <Footer />
    </article>
  );
}
