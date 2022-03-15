import React from "react";
import { ExploreCollectionsCard } from "./NftComponents";

const buttonStyle = `gradient font-orbitron  font-semibold border border-gray-400 md:w-[270.12px] md:h-[78px] my-5 w-[152.52px] px-20 flex justify-center items-center py-5 mx-4 rounded-xl`;

export default function ExploreCollections() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-orbitron font-bold text-3xl py-10">
        Explore Collections
      </h1>
      <div className="flex justify-around items-center flex-wrap">
        <div className="grid grid-cols-2 ">
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>{" "}
          <button className={`${buttonStyle}`}>Photography</button>
          <button className={`${buttonStyle}`}>Photography</button>
        </div>
        <div>
          <img src="explore.png" alt="explore.png" height="300" width="300" />
        </div>
      </div>
      <div className="container mx-auto py-10 overflow-hidden ">
        <h1 className="font-orbitron font-bold text-3xl py-10">
          Explore Collections
        </h1>
        <div className="overflow-visible">
          <div className=" mx-auto overflow-scroll  flex  ">
            <ExploreCollectionsCard />
            <ExploreCollectionsCard />
            <ExploreCollectionsCard />
            <ExploreCollectionsCard />
            <ExploreCollectionsCard />
            <ExploreCollectionsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
