import React from "react";
import { NftCard } from "./NftCard";

export default function MarketPlace() {
  return (
    <>
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="p-6 xl:col-span-3">
              <div className="grid md:grid-cols-2">
                <div className="grid content-center ml-[3vw] relative -mt-[10rem]">
                  <div className="py-10">
                    <NftCard />
                  </div>
                  <div className="py-10">
                    <NftCard />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <NftCard />
                  </div>
                  <div className="py-10">
                    <NftCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-[80px] font-bold">Music NFT Marketplace</h2>
              <p className="dark:text-coolGray-400">
                Create your first music NFTs with NFT market for musicians.
                Create music and music videos just under the $1, the platform
                works with BSC blockchain and supports mp4. With AirNFTs, you
                are getting the control over your NFTs, no middle man cutting
                your sales. Create, Buy, Sell and Earn with your music NFTs.
              </p>
              <button className="px-6 py-3 min-h-[3rem] border-2 ml-10  text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Explore Marketplace {`>`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
