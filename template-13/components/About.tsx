/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="h-screen flex relative  items-center overflow-hidden justify-center w-full flex-wrap container mx-auto px-4"
    >
      <div className="max-w-xl relative z-10  flex justify-center items-start flex-col text-start w-full h-full py-10">
        <h1 className="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
          A bit <span className="text-white">about me</span>
        </h1>
        <h1 className="max-w-3xl text-3xl text-gray-500">
          I am a UI/UX designer who is passionate about creating{" "}
          <span className="px-1 text-white">
            beautiful and joyful digital experiences. Besides design, I love
            music, games and travelling.
          </span>
        </h1>
      </div>
      <>
        <div className="absolute md:relative z-0 opacity-30 md:opacity-90 ">
          <div className="absolute left-0">
            <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px] h-screen"></div>
          </div>
          <div className="absolute right-0">
            <div className="bg-gradient-to-l from-black to-[#fff0] w-[100px] h-screen"></div>
          </div>
          <div className="absolute top-0">
            <div className="bg-gradient-to-b from-black to-[#fff0] w-screen h-[120px]"></div>
          </div>
          <div className="absolute bottom-0">
            <div className="bg-gradient-to-t from-black to-[#fff0] w-screen h-[120px]"></div>
          </div>

          <img src="Horizontal.png" alt="Image" width="400" height="400" />
        </div>
      </>
    </div>
  );
}
