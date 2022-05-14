/* eslint-disable @next/next/no-img-element */
import { EthIcon } from "./EthIcon";
interface Props {
  name: string;
  image: string;
  price: number;
  percentage: number;
  total: number;
  id: number;
}
export const CollectionCard = ({
  name,
  image,
  price,
  percentage,
  total,
  id,
}: Props) => {
  return (
    <div className="flex max-w-[360px] transition-all text-sm hover:bg-[#0f0e15] duration-300 items-center  text-white justify-between px-5 py-3 rounded-xl">
      <div className="flex items-center">
        <span className="pr-5">{id}</span>
        <img
          src={image}
          width="50"
          height="50"
          alt="profile"
          className="rounded-full"
        />
        <h1 className="px-3 text-sm">
          {name}
          <span className="flex text-gray-400 text-sm">
            Floor price:
            <EthIcon />
            <span className="text-gray-300">{price}</span>
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-red-400 ">{percentage}%</h1>
        <div className="flex">
          <EthIcon />
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};

export const NFTCard = () => {
  return (
    <div className="flex flex-col rounded-xl max-w-xs p-4 bg-black/40 border-gray-500 backdrop-blur-2xl backdrop-saturate-150 border relative">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="430"
          height="430"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col text-sm  rounded-b-xl py-3 ">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <img
              src="/profile.png"
              width="40"
              height="40"
              className="rounded-full"
              alt="profile"
            />

            <div className="flex flex-col ml-3">
              <h1>Virtual Art</h1>
              <p>by @wwwzy</p>
            </div>
          </div>
          <div className="flex fill-pink-500 text-pink-500 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            80
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <h1 className="text-gray-300 text-lg">Current Bid</h1>
          <p className="flex items-center">
            4.55
            <EthIcon />
          </p>
        </div>
        <button className="mx-1 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg font-bold rounded-lg p-[2px] ">
          <div className="bg-black py-4 rounded-lg">Place a bid</div>
        </button>
      </div>
    </div>
  );
};
