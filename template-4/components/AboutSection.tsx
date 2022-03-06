import React from "react";

export default function AboutSection() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center px-10 flex-wrap">
        <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">How do Music NFTs work?</h1>
          <p className="text-xl">
            NFTs are unique assets stored and tradable on a blockchain. They
            are, immutable, scarce and publicly verifiable. In the music world,
            artistes get to sell limited digital content to their fans who pay
            via crypto. You can now produce any music content that cannot be
            counterfeited.
          </p>
        </div>
        < >
          <img src="Group72.png" />
          <div className="absolute  -z-10 right-0   ">
            <img src="Ellipse21.svg" className="h-[60rem]" />
          </div>
        </>
      </div>
    </div>
  );
}
