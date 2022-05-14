import React from "react";
import { CollectionCard } from "./Cards";

const data = [
  {
    id: 1,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/ctakX2o5gA1QJppmsY/giphy.gif",
  },
  {
    id: 2,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/l3fzOCIuFxXpmHe2A/giphy.gif",
  },
  {
    id: 3,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/gEwRbygRCpBZFxVj4t/giphy.gif",
  },
  {
    id: 4,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/26AHzffBTIkN8l3Gg/giphy.gif",
  },
  {
    id: 5,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/3ohzdFARTmXU07NgT6/giphy.gif",
  },
  {
    id: 6,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/3o84U7IeOoPUfi0SCQ/giphy.gif",
  },
  {
    id: 7,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/26AHzffBTIkN8l3Gg/giphy.gif",
  },
  {
    id: 8,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/3ohzdFARTmXU07NgT6/giphy.gif",
  },
  {
    id: 9,
    name: "BaycHonoraryMembers",
    price: 5,
    percentage: 200,
    total: 13,
    image: "https://media.giphy.com/media/3o84U7IeOoPUfi0SCQ/giphy.gif",
  },
];

export default function TopCollections() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <h1 className="text-4xl font-bold font-mono mb-20">
        Top collections over
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl gap-7 container mx-auto lg:grid-cols-3 justify-center items-center px-5">
        {data.map((n, index) => {
          return (
            <CollectionCard
              id={n.id}
              key={index}
              image={n.image}
              name={n.name}
              price={n.price}
              percentage={n.percentage}
              total={n.total}
            />
          );
        })}
      </div>
    </div>
  );
}
