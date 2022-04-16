import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
export default function BottomNav() {
  const { theme, setTheme } = useTheme();
  const NewTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    //@ts-ignore
    <center>
      <div className=" fixed bottom-5 w-full  ">
        <div className=" shadow-2xl flex justify-center items-center bg-white border-[#F3F4F6]  dark:bg-[#111827] dark:border-[#374151] border  rounded-xl max-w-[24rem] py-3 px-5">
          <Link href="/">
            <div className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] ">
              <img src="Home.svg" width="40" height="40" />
            </div>
          </Link>
          <Link href="/project">
            <div className=" bg-gray-100 dark:bg-[#1F2937]  w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6]   ">
              <img src="lightBulb.svg" width="40" height="40" />
            </div>
          </Link>
          <Link href="/about">
            <div className=" bg-gray-100 dark:bg-[#1F2937] l w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] ">
              <img src="Profile.svg" width="40" height="40" />
            </div>
          </Link>

          <img src="Line1.svg" className="mx-2" />

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] "
            onClick={NewTheme}
          >
            {theme === "light" ? (
              <img src="lightMode.svg" width="40" height="40" />
            ) : (
              <img src="darkmode.svg" width="40" height="40" />
            )}
          </button>
        </div>
      </div>
      {/* @ts-ignore */}
    </center>
  );
}
