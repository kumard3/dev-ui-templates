/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { project } from "../data/project";

export default function Project() {
  return (
    <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="py-10  relative">
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="flex flex-col items-start">
          <h1 className="SpaceGroteskBold text-5xl">Projects 💡</h1>

          <p className="SpaceGroteskRegular text-[24px]">
            Some things i've been working on in the past few years:
          </p>
        </div>
        <div className="flex flex-col items-center  my-10 ">
          {project.map((n, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between w-full flex-col-reverse my-8 sm:my-14 sm:${n.flexrow}  flex-wrap items-start px-7`}
              >
                <div className="flex flex-col items-start max-w-2xl ">
                  <h1 className="text-5xl SpaceGroteskBold mt-6 sm:mt-0">
                    {n.title}
                  </h1>
                  <p className="SpaceGroteskRegular text-xl py-8">
                    {n.descriptionHtml}
                  </p>
                  <a href={n.external} target="_blank" rel="noreferrer">
                    <div className="relative block group  my-7 cursor-pointer ml-3">
                      <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
                      <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
                        <div className="py-3 px-10 ">
                          <p className="mt-1 text-xl">View project</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <img
                  src={n.cover}
                  width="500"
                  height="500"
                  className="rounded-lg"
                />
              </div>
            );
          })}

          {/* <div className="flex justify-between w-full flex-col-reverse sm:flex-row-reverse  my-5 flex-wrap items-start px-7">
            <div className="flex flex-col items-start max-w-2xl ">
              <h1 className="text-5xl SpaceGroteskBold">Remotely</h1>
              <p className="SpaceGroteskRegular text-xl py-8">
                Remotely is a remote friendly-company — with our headquarters in
                San Francisco, a second office in LA, and a strong commitment to
                ensuring people can do great work here and thrive without having
                to live near an office. This role is open to candidates across
                the U.S.
              </p>
              <>
                <div className="relative block group  my-7 cursor-pointer ml-3">
                  <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
                  <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
                    <div className="py-3 px-10 ">
                      <p className="mt-1 text-xl">View project</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <img src="image191.png" width="500" height="500" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
