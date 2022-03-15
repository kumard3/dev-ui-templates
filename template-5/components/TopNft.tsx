import React from "react";
import { NFTCard } from "./NftComponents";

export default function TopNft() {
  return (
    <div className="container mx-auto overflow-hidden  py-12">
      <h1 className="font-orbitron font-bold text-3xl py-10">Top Nft</h1>
      <div className="">
        <div className=" mx-auto overflow-scroll  flex  ">
          <NFTCard />
          <NFTCard />
          <NFTCard />
      
        </div>
      </div>
    </div>
  );
}
