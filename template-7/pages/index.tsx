/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import NavComponent from "../components/NavComponent";

export default function Home() {
  return (
    <div className="bg-[#15083E] min-h-screen text-white ">
      <NavComponent />
      <Header />
      <Info />
      <Features />
      <Footer />
    </div>
  );
}
