/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Client() {
  const image = ["/Airbnb.svg", "/FedEx.svg", "/Google.svg", "/Microsoft.svg"];
  return (
    <div className="container mx-auto px-5 text-xl flex flex-col items-start">
      <h1 className="uppercase text-start text-3xl py-5 font-WorkSansSemiBold text-gray-500">
        Some{" "}
        <span className="text-white">of the clients I have designed for</span>
      </h1>

      <div className="flex justify-between px-5 container mx-auto flex-wrap py-5">
        {image.map((n, index) => {
          return (
            <img
              key={index}
              src={n}
              alt="image"
              width="140"
              height="140"
              className="cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
