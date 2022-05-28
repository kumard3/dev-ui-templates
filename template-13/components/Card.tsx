/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Props {
  rev: string;
  image: string;
}

export default function Card({ rev, image }: Props) {
  return (
    <div
      className={`${rev} flex items-end  my-3 max-w-5xl flex-wrap md:flex-nowrap px-4`}
    >
      <div>
        <img
          src={image}
          alt="placeholder.png"
          width="500"
          height="500"
          className="w-full"
        />
      </div>
      <div className="mx-3 max-w-xl md:max-w-sm lg:max-w-xl">
        <p className="uppercase">Real estate Template </p>
        <h1 className="font-WorkSansSemiBold text-2xl md:text-xl lg:text-2xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          lorem non feugiat egestas amet.
        </h1>
        <p className="">Website Design</p>
        <button className="hover:bg-[#BC3CD8] px-6 py-2 border rounded-full ">
          View work
        </button>
      </div>
    </div>
  );
}
