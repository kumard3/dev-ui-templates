import React from "react";
import { TopCollectionCard } from "./Cards";

export default function TopCollection() {
  return (
    // <div className="relative ">
    //   <TopCollectionCard />
    // </div>
    <div className="container mx-auto ">
      <h1 className="text-4xl font-mono py-10 font-bold">Top Collection</h1>
      <div className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around items-center ">
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
        <TopCollectionCard />
      </div>
    </div>
  );
}
