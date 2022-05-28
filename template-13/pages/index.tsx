import * as React from "react";
import About from "../components/About";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-black text-white w-full h-full font-WorkSansRegular">
      <Header />
      <Client />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
