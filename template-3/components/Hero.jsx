import React from "react";

export default function Hero() {
  return (
    <div className="max-w-screen-2xl px-4 container mx-auto ">
      <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        <div className="flex flex-col justify-between">
          <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
            <button className="bg-[#FFDDBF] md:text-lg xl:text-xl font-semibold rounded-xl mb-4 md:mb-6 px-4 py-3">
              👋 Hello All
            </button>

            <h1 className="text-black-800 flex flex-col justify-start items-start text-[40px]  sm:text-6xl md:text-7xl font-bold mb-8 md:mb-12">
              I'm Dummy Text,
              <span className="py-3">A Product Designer </span>
              <span>and Problem Solver</span>
            </h1>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                className="inline-block bg-[#4E5E80]   focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-[5rem] py-5"
              >
                View My Work
              </a>

              <a
                href="#"
                className="inline-block focus-visible:ring   ring-[#4E5E80] border-[#4E5E80] border-2 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-[5rem] py-5"
              >
                Take tour
              </a>
            </div>
          </div>
        </div>
        {/* <div className=" h-[40rem] overflow-hidden ">
          <img
            src="/Mask.png"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="w-full h-full object-cover object-center"
          />
        </div> */}
        <div className="flex flex-col items-center  justify-center">
          <img
            src="/Mask.png"
            className="lg:h-[40rem] object-cover object-center px-10 sm:px-0 "
          />
        </div>
      </section>
    </div>
  );
}
