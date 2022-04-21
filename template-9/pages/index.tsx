/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Hero from "../components/Hero";
import HiddenGems from "../components/HiddenGems";
import LatestNft from "../components/LatestNft";
import NavComponent from "../components/NavComponent";
import TopCollection from "../components/TopCollection";
export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden px-3">
      <div className="absolute top-0 left-[50%] ">
        <div className="bg-[#73E0A9] w-[849px] h-[825px] filter blur-[509px]"></div>
        <div className="bg-[#5B68DF] w-[999px] h-[971px] filter blur-[509px]"></div>
      </div>
      <NavComponent />
      <Hero />
      <HiddenGems />
      <TopCollection />
      <div className="absolute bottom-0 left-0  ">
        <div className="bg-[#73E0A9] absolute w-[849px] h-[825px] filter blur-[509px]"></div>
        <div className="bg-[#5B68DF] absolute w-[999px] h-[971px] filter blur-[509px]"></div>
      </div>

      <LatestNft />
    </div>
  );
}
