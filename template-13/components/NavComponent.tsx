/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

import Link from "next/link";

const navData = [
  {
    id: "1",
    name: "Home",
    href: "#home",
  },
  {
    id: "2",
    name: "Work",
    href: "#work",
  },
  {
    id: "3",
    name: "About",
    href: "#about",
  },
  {
    id: "4",
    name: "Contact",
    href: "#contact",
  },
];

export default function NavComponent() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <nav className="flex backdrop-blur-md bg-black/50 py-5 sticky top-0 z-50 justify-between px-10 w-full items-center">
      <div className="h-10 pt-4">
        <img src="logo.svg" alt="logo" />
      </div>
      <div className="  sm:hidden">
        <>
          {isModalOpen ? (
            <div
              ref={ref}
              className="fixed  h-[90vh] right-0 top-5 px-4 w-full transition transform md:hidden"
            >
              <div className="rounded-lg shadow-lg  h-full  ring-opacity-5 bg-white border-[1px] border-red-100/20 text-black divide-y-2 divide-black/50">
                <div className="pt-5 pb-6 px-5">
                  <div className="mr-4 float-right mb-3 ">
                    <button
                      onClick={() => setModalOpen(!true)}
                      className=" rounded-md p-2 inline-flex bg-white items-center justify-center  hover:text-gray-500 hover:bg-gray-100 "
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

                  <div className="mt-[5rem] z-10 relative">
                    <nav className="grid gap-y-8">
                      {navData.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md  border-[1px] hover:bg-[#7C76BB] text-[#7C76BB] hover:text-white "
                        >
                          <h1 className="my-3 ml-3 text-3xl font-bold  ">
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
            <div className=" rounded-md p-2 inline-flex items-center justify-center fill-white hover:text-gray-500 ">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center lg:hidden   focus-visible:ring   active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
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
      <div className="hidden sm:flex items-center">
        {navData.map((n) => {
          return (
            <Link key={n.id} href={n.href}>
              <button className="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
                {n.name}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
