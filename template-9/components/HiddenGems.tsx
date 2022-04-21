import React from "react";
import { HiddenGemsCard } from "./Cards";

export default function HiddenGems() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-mono py-10 font-bold">Hidden Gems</h1>
      <div className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around items-center ">
        <HiddenGemsCard />
        <HiddenGemsCard />
        <HiddenGemsCard />
        <HiddenGemsCard />
      </div>
    </div>
  );
}
