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
      <div className=" fixed fill-[#1F2937] dark:fill-white bottom-5 w-full  ">
        <div className=" shadow-2xl flex justify-center items-center bg-white border-[#F3F4F6]  dark:bg-[#111827] dark:border-[#374151] border  rounded-xl max-w-[24rem] py-3 px-5">
          <Link href="/">
            <div className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 46 48"
                // fill="#F9FAFB"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M16.3145 44.4712V37.3365C16.3145 35.5152 17.8018 34.0387 19.6364 34.0387H26.3428C27.2238 34.0387 28.0687 34.3862 28.6917 35.0046C29.3147 35.6231 29.6647 36.4618 29.6647 37.3365V44.4712C29.6591 45.2283 29.9582 45.9564 30.4956 46.4938C31.0329 47.0311 31.7642 47.3334 32.5269 47.3334H37.1023C39.2392 47.3388 41.2905 46.5 42.8034 45.0019C44.3164 43.5038 45.1667 41.4696 45.1667 39.3483V19.0227C45.1667 17.3091 44.4015 15.6837 43.0775 14.5842L27.5128 2.24371C24.8052 0.0799975 20.926 0.149859 18.2993 2.40964L3.08974 14.5842C1.7031 15.6512 0.874329 17.2815 0.833374 19.0227V39.3275C0.833374 43.749 4.44393 47.3334 8.89778 47.3334H13.3687C14.9529 47.3334 16.2404 46.0645 16.2518 44.4919L16.3145 44.4712Z"
                  fill=""
                />
              </svg>
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
