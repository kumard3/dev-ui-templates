/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/infoSection";
import MarketTrend from "../components/MarketTrend";
import Nav from "../components/Nav";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen ">
      <Nav />
      <Header />
      <InfoSection />
      <MarketTrend />
      <NewsLetter />
      <Footer />
    </div>
  );
}
