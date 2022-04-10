import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-around flex-wrap  px-4">
      <div className="max-w-xl text-white my-10">
        <h1 className="text-5xl md:text-[56px]  font-bold">
          Discover <span className="gradientText">Characters</span> in
          Pixi-World
        </h1>
        <p className="text-[22px] my-6">
          We believe the world is more beautiful as each person gets better. We
          believe the world is more beautiful as each person gets better. Person
          gets better.{" "}
        </p>
        <button className="text-[#8C72FF] bg-white rounded-xl px-3 py-1">
          Get Started for Free{" "}
        </button>
      </div>
      <div>
        <img src="Group3.png" alt="pixi-world" />
      </div>
    </div>
  );
}
