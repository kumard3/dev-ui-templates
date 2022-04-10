import React from "react";

export default function Info() {
  return (
    <div className="relative flex items-end w-full justify-end py-20 px-7">
      <div className="hidden md:block absolute left-10 ">
        <img src="Frame16.png" width="200" height="200"/>
      </div>{" "}
      <div className="hidden md:block absolute right-[10rem] -top-10">
        <img src="/Variant5.png" />
      </div>
      <h1 className="max-w-4xl font-bold text-[44px] text-right">
        You are one step away from discovering your next{" "}
        <span className="gradientText">Characters</span> in Pixi-World
      </h1>
    </div>
  );
}
