import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen my-20 ">

      <div className="flex  w-full flex-wrap xl:flex-nowrap container mx-auto  justify-between  py-[2rem] z-50 ">
        <div className="flex mt-10 flex-col  dark:text-white sm:text-center  lg:text-left pl-7  rounded-sm  ">
          <h1 className="hero-title text-[80px] font-bold leading-none ">
            Music for NFT creators.
          </h1>

          <h1 className="hero-title text-6xl font-semibold flex flex-col my-4 ">
            Digital Music for fans.
          </h1>
          <p className="max-w-lg ">
            Music NFTs will continue to revolutionize the way that artists and
            fans create community together as we enter the upcoming year —
            undoubtedly changing the trajectory of countless budding music
            careers.{" "}
          </p>
          <div className="flex  items-center sm:justify-center lg:justify-start ">
            <>
              <button className=" flex flex-col justify-start ml-5  text-lg font-bold rounded  text-white ">
                Powered By
                <img src="logo-black1.png" />
              </button>
            </>
            <>
              <button className="px-6 py-3 min-h-[3rem] border-2 ml-10  text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Discover More {`>`}
              </button>
            </>
          </div>
        </div>
        <div className="h-[4 relative xl:absolute xl:top-16 right-0">
          <img src="image5.png" className="object-fit h-full" />
        </div>
      </div>
    </div>
  );
}
