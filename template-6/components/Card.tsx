import React from "react";
interface Props {
  img: string;
}
export default function Card({ img }: Props) {
  return (
    <div className="bg-[#010010] w-[297px] rounded-xl  backdrop- shadow-emerald-600 h-[187px] p-4 border items-center  ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={img} alt="alt" />
          <h1 className="text-xl font-bold mx-2">BTC</h1>
          <h3 className="text-sm font-bold mx-2">BITCOIN</h3>
        </div>
        <div className="pr-2">
          <img src="arrow-icon.png" alt="alt" />
        </div>
      </div>
      <div className="flex items-center pt-6 justify-around ">
        <div className="flex flex-col text-xl  font-bold">
          <span>$56,623.54</span>
          <span className="py-4">1.41%</span>
        </div>
        <div className="flex items-center flex-col h-full ">
          <img src="graph.png" alt="" />
        </div>
      </div>
    </div>
  );
}
