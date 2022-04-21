import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const navData = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function NavComponent() {
  const data = ["Home", "Work", "About"];
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    // <Popover className= {`sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-white supports-backdrop-blur:bg-white/95 ${show && 'bg-inherit	'}`}>
    <div className="sticky top-0 z-10 backdrop-blur-xl  text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <div className="flex justify-between items-center sm:px-8  py-6 sm:justify-between sm:space-x-10">
        <div className="flex justify-start">
          <div className="h-10">
            <img src="/logo-nft.png" width="50" height="50" alt="nft-logo" />
          </div>
        </div>
        <div className="-mr-2 -my-2 sm:hidden">
          <>
            {isModalOpen ? (
              <div
                ref={ref}
                className="fixed right-0 top-0 w-full  p-2  transition transform md:hidden"
              >
                <div className="rounded-lg shadow-lg  ring-1 h-full ring-black ring-opacity-5 bg-[#14426b] border-[1px] border-red-100/20 text-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <img
                          src="/logo-nft.png"
                          width="50"
                          height="50"
                          alt="nft-logo"
                        />
                      </div>
                      <div className="-mr-2 float-right mb-3">
                        <button
                          onClick={() => setModalOpen(!true)}
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 text-black hover:bg-gray-100 "
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
                  className="inline-flex items-center lg:hidden text-black  focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
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
          <ul className="text-black flex items-center h-full justify-center ">
            {data.map((n, index) => {
              return (
                <li key={index} className="mx-5 text-xl">
                  {n}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className=" text-black border-gradientbutton px-3 py-1 text-[16px] font-bold rounded-md mx-3 ">
            Account
          </button>
          <button className="bg-gradient-to-r from-[#73E0A9] to-[#5B68DF] text-white px-3 py-1 text-[16px] font-bold rounded-md ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
