import React from "react";

export default function Community() {
  return (
    <div className="my-[10rem]">
      <div className="absolute  -z-10 right-0  top-[280vh]">
        <img src="Ellipse18.svg" className="relative " />
      </div>
      <div className="flex flex-col container mx-auto">
        <h1 className="text-5xl sm:text-[80px] flex flex-col ">
          Engage your <span> Fans with community</span>{" "}
        </h1>
        <div className="flex flex-wrap   justify-center  items-center">
          <div className="flex flex-col max-w-sm p-5">
            <h1 className="text-[60px]">01</h1>
            <p>
              Artists themselves become a platform. NFTs allow artistes,
              especially upcoming ones, to create an ecosystem that allows
              genuine fans to buy into their market.
            </p>
          </div>
          <div className="flex flex-col max-w-sm p-5">
            <h1 className="text-[60px]">01</h1>
            <p>
              Artists themselves become a platform. NFTs allow artistes,
              especially upcoming ones, to create an ecosystem that allows
              genuine fans to buy into their market.
            </p>
          </div>{" "}
          <div className="flex flex-col max-w-sm p-5">
            <h1 className="text-[60px]">01</h1>
            <p>
              Artists themselves become a platform. NFTs allow artistes,
              especially upcoming ones, to create an ecosystem that allows
              genuine fans to buy into their market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
