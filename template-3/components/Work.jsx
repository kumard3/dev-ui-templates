import React from "react";

const WorkData = [
  {
    title: "Lorem ipsum  ",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/Group10.png",
  },
  {
    title: "Lorem ipsum  ",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/Group10.png",
  },
  {
    title: "Lorem ipsum  ",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/Group10.png",
  },
];

const WorkCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#FFF8F2]  overflow-hidden my-3  rounded-2xl">
      <div className="grid sm:flex  before:content-[''] before:bg-black  justify-between items-center  h-[300px]   max-w-6xl">
        <div className=" bg-[#FFF8F2]/50 backdrop-blur-[.6px] text-gray-900 px-3 w-full sm:bg-none justify-center items-center h-[300px] flex flex-col sm:pl-10 z-50 sm:max-w-[400px] ">
          <div >
            <h1 className="text-4xl WorkSans font-bold">{title}</h1>
            <p className="max-w-xs  text-lg WorkSans py-3 ">{description}</p>
          </div>
        </div>

        <div className=" overflow-hidden w-full relative -top-[10rem]  sm:top-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center  "
          />
        </div>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="bg-[#FFDDBF] py-10 flex flex-col justify-center item-center w-full">
      <h1 className="text-[44px] font-bold pl-10">My Recent Work </h1>

      <div className="grid px-6 items-center  justify-center">
        {WorkData.map((n) => {
          return (
            <WorkCard
              title={n.title}
              description={n.description}
              image={n.image}
            />
          );
        })}
      </div>
    </div>
  );
}
