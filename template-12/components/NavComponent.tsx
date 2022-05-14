/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const navData = [
  {
    name: "Explore",
    href: "#home",
  },
  {
    name: "Activity",
    href: "#work",
  },
  {
    name: "Resources",
    href: "#about",
  },
];

export default function NavComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="sticky top-0 z-10 backdrop-blur-xl  text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <div className="flex justify-between items-center sm:px-8 px-2 py-6 sm:justify-between sm:space-x-10">
        <div className="flex justify-start">
          <div className="h-10 text-2xl font-bold font-mono">logo</div>
        </div>
        <div className=" sm:hidden">
          <>
            {isModalOpen ? (
              <div
                ref={ref}
                className="fixed right-0 top-0 w-full  p-2  transition transform md:hidden"
              >
                <div className="rounded-lg shadow-lg  ring-1 h-full ring-black ring-opacity-5 bg-[#0c0f13] border-[1px] border-red-100/20 text-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex justify-between items-center">
                      <div>Logo</div>
                      <div className="-mr-2 float-right mb-3">
                        <button
                          onClick={() => setModalOpen(!isModalOpen)}
                          className=" rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500  "
                        >
                          <span className="sr-only">Close menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-[3rem] z-10 relative">
                      <nav className="grid gap-y-8">
                        {navData.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-black/10  border "
                          >
                            <h1 className="my-3 ml-3 text-3xl font-bold ">
                              {item.name}
                            </h1>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 ">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center lg:hidden   focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        </div>
        <div className="hidden sm:block ">
          <ul className=" flex items-center h-full justify-center ">
            {navData.map((n, index) => {
              return (
                <li key={index} className="mx-5 text-xl">
                  {n.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="  border-gradientbutton px-3 py-1 text-[16px] font-bold rounded-md mx-3 ">
            Account
          </button>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1 text-[16px] font-bold rounded-md ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
