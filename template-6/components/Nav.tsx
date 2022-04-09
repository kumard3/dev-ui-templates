import React from "react";

export default function Nav() {
  return (
    // <div className="bg-black w-full text-white flex items-center justify-around ">
    //   <div className="flex items-center ">
    // <img src="circlechain-logo.png" alt="alt" />
    // <h1 className="text-4xl">Circlechain</h1>
    //   </div>

    //   <div className="flex w-1/5 items-center justify-between ">
    //     <h1>How it works</h1>
    //     <h1>Blog</h1>
    //     <h1>Support</h1>
    //   </div>
    //   <div className="flex w-1/5 justify-between">
    // <img src="logo1.png" alt="alt" width="30" height="30" />
    // <img src="logo2.png" alt="alt" width="30" height="30" />
    // <img src="logo3.png" alt="alt" width="30" height="30" />
    // <img src="logo4.png" alt="alt" width="30" height="30" />
    //   </div>
    // </div>
    <header className="p-4 bg-coolGray-100 text-coolGray-800 w-full">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="white" />
            <circle cx="10" cy="48" r="10" fill="white" />
            <circle cx="48" cy="48" r="10" fill="white" />
            <circle cx="48" cy="10" r="10" fill="white" />
            <path d="M42 10H15" stroke="white" strokeWidth="3" />
            <path d="M12 16V42" stroke="white" strokeWidth="3" />
            <path d="M15 49H44" stroke="white" strokeWidth="3" />
            <path
              d="M49 44V29"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <h1 className="text-3xl sm:text-4xl font-bold">Circlechain</h1>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex text-xl font-bold">
          <li className="flex ">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              How it works
            </a>
          </li>
          <li className="flex ">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Blog
            </a>
          </li>
          <li className="flex ">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Support
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex justify-between">
          {/* <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-white">
            Sign up
          </button> */}
          <img
            src="logo1.png"
            alt="alt"
            width="30"
            height="30"
            className="mx-3"
          />
          <img
            src="logo2.png"
            alt="alt"
            width="30"
            height="30"
            className="mx-3"
          />
          <img
            src="logo3.png"
            alt="alt"
            width="30"
            height="30"
            className="mx-3"
          />
          <img
            src="logo4.png"
            alt="alt"
            width="30"
            height="30"
            className="mx-3"
          />
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
