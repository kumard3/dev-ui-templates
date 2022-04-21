/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export function HiddenGemsCard() {
  return (
    <div className="bg-gradient-to-r relative from-[#73e0a956] to-[#5B68DF] p-1 max-w-[330px] min-h-[525px] text-white rounded-xl  ">
      <div className="w-full min-h-full rounded-xl bg-[#ffffffdc] flex flex-col justify-center items-center p-2">
        <div className="relative">
          <img src="Rectangle3.png" />
          <div className="relative ">
            <img src="Ellipse1.png" className="absolute inset-[40%] -top-4" />
          </div>
        </div>
        <div className="relative  text-black pt-14 pb-5">
          <div className="flex justify-center items-start  text-2xl">
            ZombieClub Token{" "}
            <img src="Vector.png" width="30" height="30" className="mx-2" />
          </div>
          <p className="text-[14px] font-light font-mono">
            Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is
            unique and resides on the Ethereum blockchain. Your Zombie Lab Club
            NFT will double as your club membership.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TopCollectionCard() {
  return (
    <div className="flex z-50 max-w-[290px] h-[400px]  justify-center items-center flex-col relative  border-gradient  ">
      <div>
        <img src="Rectangle6.png" className="rounded-t-[29px]" />
      </div>
      <div className=" rounded-b-[30px] mb-3 bg-gradient-to-r  relative from-[#73e0a956] to-[#5B68DF] w-[260.71px] h-[291.74px]">
        <div className="flex items-center justify-between py-3 px-1">
          <div>
            <img src="Ellipse-2.png" />
          </div>
          <div className="text-left ">
            <h1 className="font-bold ">World of Women Galaxy</h1>
            <p className="text-[14px]">By Organization Woman</p>
          </div>
        </div>
        <div className="bg-white w-full h-[1px] ab "></div>
        <div className="absolute bottom-4 left-3">
          <h1 className="text-xl font-bold">Price</h1>
          <p>0.218 ETH</p>
        </div>
      </div>
    </div>
  );
}
