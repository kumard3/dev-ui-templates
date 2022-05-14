import React from "react";
import { NFTCard } from "./Cards";

export default function NftCollection() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <h1 className="text-5xl font-mono font-bold text-center py-20">
        NftCollection
      </h1>
      <div className="flex flex-wrap gap-10 container mx-auto justify-center items-center">
        {number.map((n) => {
          return <NFTCard key={n} />
        })}
      </div>
    </div>
  );
}
