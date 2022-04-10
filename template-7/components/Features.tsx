import React from "react";

export default function Features() {
  return (
    <div className="min-h-screen py-10 relative overflow-hidden px-4">
      <div className="absolute inset-0">
        <svg
          width="1440"
          height="2220"
          viewBox="0 0 1440 2220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1479.75"
            y="-52.6104"
            width="262.684"
            height="2762.24"
            rx="131.342"
            transform="rotate(38.5112 1479.75 -52.6104)"
            fill="#291C52"
          />
        </svg>
      </div>
      <section className="flex justify-around relative items-center flex-wrap ">
        <div>
          <img src="Frame15.png" />
        </div>
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-[56px]  font-bold">
            Discover Characters in Pixi-World
          </h1>
          <p className="text-[22px] my-6">
            We believe the world is more beautiful as each person gets better.
            We believe the world is more beautiful as each person gets better.
            Person gets better.{" "}
          </p>
          <button className="text-[#8C72FF] bg-white rounded-xl px-3 py-1">
            Try It Now
          </button>
        </div>
      </section>

      <section className="flex my-20 flex-col-reverse xl:flex-row justify-around relative items-center flex-wrap ">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-[56px]  font-bold">
            Discover Characters in Pixi-World
          </h1>
          <p className="text-[22px] my-6">
            We believe the world is more beautiful as each person gets better.
            We believe the world is more beautiful as each person gets better.
            Person gets better.{" "}
          </p>
          <button className="text-[#8C72FF] bg-white rounded-xl px-3 py-1">
            Try It Now
          </button>
        </div>
        <div>
          <img src="Group2.png" />
        </div>
      </section>
      
    </div>
  );
}
