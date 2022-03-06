import React from "react";
import { NftCardWithButton } from "./NftCard";

export default function Discover() {
  return (
    <div className="flex flex-col my-10  px-10 ">
      <div className="flex py-10 ">
        <h1 className="text-5xl sm:text-[80px]">Discover Music NFT</h1>
      </div>
      <div className="flex flex-wrap justify-between  items-center ">
      {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
        <NftCardWithButton />
      </div>
    </div>
  );
}
