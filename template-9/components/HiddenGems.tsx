import React from "react";
import Card from "./Card";

export default function HiddenGems() {
  return (
    <>
      <h1 className="text-4xl font-mono py-10 font-bold">Hidden Gems</h1>
      <div className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around items-center ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
