import React from "react";

const data = [
  {
    title: "01/",
    description:
      "Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allows genuine fans to buy into their market.",
  },
  {
    title: "02/",
    description:
      "NFT gives all the power to creators. Anyone upcoming artiste can do their stuff on-chain, making them more independent and freeing them from unfavorable deals from record labels. ",
  },
  {
    title: "03/",
    description:
      "A positive NFT-fueled change in the music market can upstage crypto adoption at large.",
  },
];

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
          {data.map((n, index) => {
            return (
              <div key={index} className="flex flex-col max-w-sm p-5">
                <h1 className="text-[60px] font-mono">{n.title}</h1>
                <p>{n.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
