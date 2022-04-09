import React from "react";

export default function NewsLetter() {
  return (
    <div className="relative md:py-20 py-3 w-full px-5 flex flex-col md:justify-center md:items-center ">
      <div className="flex relative flex-col bg-black rounded-xl border-green-400  border-2 max-w-[1024px] items-center px-8 py-10 md:py-20 md:px-20">
        <h1 className="text-xl md:text-4xl font-bold text-center md:text-left pb-6">
          Want to be aware of all update
        </h1>
        <div className="w-full flex flex-col justify-center  items-center md:flex-row">
          <input className="md:w-[35vw] w-full border-2 mx-1 my-3 border-green-500 px-10 py-3 rounded-xl " />
          <button className="bg-green-400 px-10 py-2 rounded-xl text-black font-bold">
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute top-10 right-64 bg-[#73FDAA] w-32 h-32 rounded-full blur-2xl md:block hidden "></div>

      <div className="absolute top-60 left-64 bg-[#73FDAA] w-32 h-32 rounded-full blur-2xl  md:block hidden  "></div>
    </div>
  );
}
