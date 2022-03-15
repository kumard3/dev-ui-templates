/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function MoreInfo() {
  return (
    <div className="w-full relative ">
      <div className="w-full ">
        <img src="bg.png" alt="" className="w-full " />
      </div>
      
     <div className="w-full flex justify-center items-center">
      <div className="flex gradient sm:max-w-xl  max-w-md border-2 border-gray-400 absolute sm:-bottom-12 sm:right-10 rounded-xl backdrop-blur-md flex-col px-6 py-3 justify-center items-center text-center ">
        <h1 className="font-mono text-4xl sm:text-5xl py-4">What are NFT's ?</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis
          amet, faucibus lorem. Lectus amet odio quis sed adipiscing adipiscing
          magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit
          suspendisse curabitur eu congue dui ut.
        </p>
      </div>
    </div> 
    </div>
  );
}
