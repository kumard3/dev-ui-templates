/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full  container px-4 mx-auto flex flex-col justify-center items-center h-screen -mt-20 ">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="flex flex-col items-start relative ">
        <div className="flex flex-col items-start SpaceGroteskBold text-[28px] md:text-[50px] lg:text-[64px] ">
          <h1>Hello!👋🏻</h1>
          <h1>My name is Kumar Deepanshu</h1>
          <h1>
            I'm a Front End <span className="text">Developer</span>
          </h1>
        </div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="SpaceGroteskRegular text-[16px] md:text-[20px] lg:text-[24px] py-5">
          <p>
            Let me help you grow your business and make your product look pretty
            while at it{" "}
          </p>
        </div>
        <>
          <div className="relative block group  my-7 ml-4 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <p className="mt-1 text-xl">Say Hello</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
