/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Hero() {
  return (
    <div className="container mx-auto py-10 flex flex-wrap justify-around items-center px-4">
      <div className="max-w-2xl ">
        <div className="text-left">
          <h1 className="font-spartan font-bold text-6xl">
            Discover, collect, and sell{" "}
            <span className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500 bg-clip-text text-transparent ">
              {" "}
              Timeless
            </span>{" "}
            NFTs
          </h1>
          <p className="font-rajdhani font-semibold text-xl">
            The world's first and largest digital marketplace for crypto
            collectibles and non- fungible tokens (NFTs).{" "}
          </p>
          <div className="flex flex-around py-10">
            <button className="bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg">
              Explore
            </button>
            <h1 className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500  font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg bg-clip-text text-transparent ">
              Create NFT's
            </h1>
          </div>
        </div>
        <>
          <div className="grid grid-cols-2 md:flex md:divide-x gap-4  py-20">
            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                35m+
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Auctions
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                500+
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Projects
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block  text-lg md:text-xl font-bold text-center md:text-left">
                250+
              </span>
              <span className="block  text-sm md:text-base font-semibold text-center md:text-left">
                Customers
              </span>
            </div>
          </div>
        </>
      </div>
      <div className="flex-end">
        <img src="/nft.png" alt="apes" className="rounded-3xl" />
        <div className="gradient relative grid grid-cols-2 backdrop-blur-xl -top-20 p-[10px] rounded-lg sm:left-36 left-10 min-h-[10rem] w-[336px] border-1 border">
          <div className="flex flex-col items-center justify-center h-full relative">
            <h1 className="font-rajdhani text-lg font-bold">
              3D Abstract Hand
            </h1>
            <div className="flex items-center py-2">
              <img src="avatar.png" alt="avatar" />
              <h1 className="px-1">@jhonartist</h1>
            </div>
            <div className="flex font-rajdhani flex-col">
              <h3>Reserve price</h3>
              <h1 className="font-bold">ETH 9.31</h1>
            </div>
          </div>
          <div className="flex flex-col item-center  justify-center">
            <h1>Auction Ends in</h1>
            <div className="grid grid-cols-3 py-1">
              <div className="pr-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>{" "}
              <div className="px-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>{" "}
              <div className="pl-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-indigo-500  relative via-purple-500 to-pink-500 px-[1.2em] flex-end py-[.7em] rounded-xl">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
