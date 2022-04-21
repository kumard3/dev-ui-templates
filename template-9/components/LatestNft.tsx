import React from "react";

export default function LatestNft() {
  return (
    <div className="relative z-50 container mx-auto flex flex-col justify-center  items-center py-10">
      <div className="text-center py-10 ">
        <h1 className="font-bold text-5xl">Discover the latest #TOPNFT</h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold	">The NFT marketplace with everything for everyone</p>
      </div>
      <div>
        <img src="video-bg.png" />
      </div>
      <button className="bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] w-[230px] h-[50px] text-black rounded-full text-md font-bold my-10 ">
        Explore the marketplace
      </button>
    </div>
  );
}
