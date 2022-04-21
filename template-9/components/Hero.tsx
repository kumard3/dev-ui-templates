/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center h-[80vh] justify-center w-full">
      <div className="absolute right-0 top-0 w-full h-full">
        <img src="11.png" className="absolute -right-36 -top-36 " />
      </div>
      <div className="flex flex-col text-left relative px-4 ">
        <h1 className="font-mono font-bold sm:text-xl text-[#1f1d2bea]">
          Exclusive NFT for Digital and Real-world Assets
        </h1>
        <h1 className="text-4xl max-w-7xl font-semibold text-[#1F1D2B]">
          The world's first non-fungible token (NFT) marketplace for both
          digital and physical assets.
        </h1>
        <div className="flex justify-around max-w-sm py-10">
          <button
            type="button"
            className=" relative bg-gradient-to-r mx-1 sm:mx-0 p-[3px] flex flex-col items-center from-[#73E0A9] to-[#5B68DF] w-[170px] h-[50px] text-black rounded-full text-2xl "
          >
            <div className="bg-white w-full h-full text-center pt-1 rounded-full ">
              Explore
            </div>
          </button>
          <button
            type="button"
            className="bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] w-[170px] h-[50px] text-white rounded-full text-2xl "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
