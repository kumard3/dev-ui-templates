import React from "react";

const WorkData = [
  {
    title: "Sheepify States",
    description:
      "Designed some empty state screens in kawaii style for the popular sheepify app. ",
    image: "/Group10.png",
  },

  {
    title: "HoneyBunny",
    description:
      "A colorful dashboard to manage your fictional projects and team, all in a single place.",
    image: "/Home1.png",
  },

  {
    title: "Memrise Redesign",
    description:
      "I redesigned the popular language learning app memrise in kawaii style to make it more cute.",
    image: "/Group8.png",
  },
];

const WorkCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#FFF8F2] flex justify-between items-center overflow-hidden max-h-[400px] my-3 max-w-6xl rounded-2xl">
      <div className="flex flex-col pl-10">
        <h1 className="text-4xl WorkSans font-bold">{title}</h1>
        <p className="max-w-xs text-lg WorkSans py-3 ">{description}</p>
      </div>
      <div className=" overflow-hidden ">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="bg-[#FFDDBF]">
      <h1 className="text-[40px] pl-10">My Recent Work </h1>
      <div className="container mx-auto">
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
