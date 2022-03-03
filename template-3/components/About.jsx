import React from "react";
const AboutData = [
  {
    sortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere.      ",
    description:
      "I have been waiting. I've been waiting all day. Waiting for Gus to send one of his men to kill me. And it's you. Who do you know, who's okay with using children, Jesse? Who do you know… who's allowed children to be murdered… hmm? Gus! He has, he has been ten steps ahead of me at every turn.",
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
