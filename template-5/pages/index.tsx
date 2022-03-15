/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import ExploreCollections from "../components/ExploreCollections";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfo from "../components/MoreInfo";
import NavComponent from "../components/NavComponent";
import NewsLetterFeed from "../components/NewsLetterFeed";
import TopNft from "../components/TopNft";
import TopSellers from "../components/TopSellers";

export default function Home() {
  return (
    <div className="text-white ">
      <NavComponent />
      <Hero />
      <TopNft />
      <ExploreCollections />
      <TopSellers />
      <MoreInfo />
      <NewsLetterFeed />
      <Footer />
    </div>
  );
}
