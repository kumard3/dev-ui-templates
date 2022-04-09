import React from "react";
import Card from "./Card";

export default function MarketTrend() {
  const imageData = [
    "bitcoin-icon.png",
    "eth-icon.png",
    "bnb-icon.png",
    "usdt-icon.png",
    "bitcoin-icon.png",
    "eth-icon.png",
    "bnb-icon.png",
    "usdt-icon.png",
    "bitcoin-icon.png",
    "eth-icon.png",
    "bnb-icon.png",
    "usdt-icon.png",
    "bitcoin-icon.png",
    "eth-icon.png",
    "bnb-icon.png",
    "usdt-icon.png",
  ];
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl py-4 font-bold">Market Trend</h1>
      <div className="grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {imageData.map((n, index) => {
          return <Card img={n} key={index} />;
        })}
      </div>
      {/* <Card img="bitcoin-icon.png" /> */}
    </div>
  );
}
