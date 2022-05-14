/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  const data = ["HOME", "GALLERY", "BLOG", "KNET"];

  return (
    <div className=" items-center relative min-h-screen flex justify-around relative flex-wrap px-5">
      <>
        <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter top-0  left-0 opacity-75"></div>
      </>

      <div className="max-w-2xl relative">
        <h1 className=" text-4xl md:text-6xl font-bold text-left uppercase">
          Discover, collect, and charity in extraordinary NFT marketplace{" "}
        </h1>
        <p className="max-w-md text-lg md:text-xl text-left my-9">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <div className="flex justify-between max-w-xs my-5 ">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-2 rounded-lg text-2xl font-bold flex items-center">
            Explore
          </button>
          <button className="border  px-8 py-2 rounded-lg text-2xl font-bold flex items-center">
            Create
          </button>
        </div>
      </div>
      <>
        <div
          className="flex flex-col rounded-xl border border-gray-500  p-4 relative"
          style={{
            borderImageSource:
              "linear-gradient(168.82deg, #fb37ff 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1bb2de 99.52%)",
            backdropFilter: "blur(1114px)",
            background:
              "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)",
          }}
        >
          <>
            <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[120px] filter top-0  right-48 opacity-75"></div>
          </>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
              alt="nft-gif"
              width="430"
              height="430"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col  rounded-b-xl py-4 ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
              <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
              <p>#345</p>
              <p>0.01</p>
            </div>
          </div>

          <>
            <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter bottom-0  right-0 opacity-75"></div>
          </>
        </div>
      </>
    </div>
  );
}
