import React from "react";
const AboutData = [
  {
    sortDescription:
      "I am Shambhavi Mishra from Lucknow, India. I am working in an Indian Startup as a Product Designer for the past one year.",
    description:
      "I got featured various times on many big and small marketplaces, portfolio websites and blogs. I also received some awards and recognitions from some of the big and small award companies. Besides designing, I like to write poems, stories and sing songs.",
  },
];
export default function About() {
  return (
    <div className="bg-[#FFDDBF] pt-[2rem]">
      <div className="container w-full mx-auto flex flex-wrap justify-between ">
        <div className="flex flex-col items-start justify-center max-w-lg  px-[30px]">
          <h1 className="text-5xl font-bold  text-left">
            A Little Bit About Me
          </h1>
          <p className="text-md my-5 WorkSans">
            {AboutData[0].sortDescription}
          </p>
          <p className="text-md WorkSans">{AboutData[0].description}</p>

          <a
            href="#"
            className="inline-block focus-visible:ring  my-4  border-[#4E5E80] hover:bg-[#4E5E80] hover:text-white ease-out  border-2 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-300 px-[2em] py-[.9em]"
          >
            Contact Me
          </a>
        </div>

        <div className="flex flex-col items-center  justify-center ">
          <img
            src="/Frame.png"
            className="md:h-[30rem] sm:w-[27rem] px-[5rem] sm:px-0"
          />
        </div>
      </div>
    </div>
  );
}
