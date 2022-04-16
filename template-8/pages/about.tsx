/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-start px-5 mt-6 max-w-5xl min-h-[140vh] md:min-h-screen ">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <h1 className="SpaceGroteskBold text-[64px]">About Me 👨‍</h1>
      <p className="SpaceGroteskRegular text-[24px]">
        A brief intro to who i am and how i do what i do:
      </p>
      <h1 className="SpaceGroteskRegular py-5 text-4xl ">
        I am <span className="text-6xl SpaceGroteskBold ">Kumar Deepanshu</span>
      </h1>
      <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

      <div className="SpaceGroteskRegular text-[24px] max-w-5xl mt-3">
        <p className="SpaceGroteskRegular text-[24px] py-5">
          An enthusiastic front-end software engineer with more than 4 years of
          experience in the field. during the last four years, from front-end to
          mobile to desktop to back-end I have experience of developing a lot of
          applications using modern JavaScript frameworks and libraries. As a
          developer who thrives in agile teams, I have worked successfully with
          product owners, developers, and designers to achieve successful
          implementations.
        </p>
        <p className="SpaceGroteskRegular text-[24px] py-5">
          I believe i've got the right skills and technologies to take your
          online presence on the level it truly deserves. Your website should be
          your no1 sales agent and its works 24/7, Get a quote now that's best
          for your business.
        </p>
      </div>
      <>
        <div className="relative block group  my-7 cursor-pointer">
          <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
          <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
            <div className="py-3 px-10 ">
              <p className="mt-1 text-xl">Say Hello</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
