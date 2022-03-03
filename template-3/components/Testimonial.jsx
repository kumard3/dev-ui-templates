import React from "react";

export default function Testimonial() {
  return (
    <section className="my-8 px-3 min-h-[50vh] flex flex-col justify-center item-center">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              The Lorem Ipsum Company has been an integral part of our content
              marketing success. We have seen a notable increase in organic
              leads since we began using their services in 2012.
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-indigo-400"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              My busy schedule leaves little, if any, time for blogging and
              social media. The Lorem Ipsum Company has been a huge part of
              helping me grow my business through organic search and content
              marketing
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-indigo-400"></span>
          <p>Leroy Jenkins</p>
        </div>
      </div>
    </section>
  );
}
