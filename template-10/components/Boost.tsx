import React from 'react'

export default function Boost() {
  // const data = [
  //     {
  //         img: 'Group14.png',
  //         title: 'Direct Scheduling',
  //         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  //     },
  //     {
  //         img: 'Group15.png',
  //         title: 'Reminders',
  //         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  //     },
  //     {
  //         img: 'Group16.png',
  //         title: 'Shop Grid',
  //         text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //     },

  // ]
  const data = [
    {
      img: 'Group41.png',
      title: 'Scheduling',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      img: 'Group42.png',
      title: 'Increase conversion',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      img: 'Group43.png',
      title: 'Increase analytics',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]
  return (
    <div className="flex flex-col min-h-screen py-10 justify-center  items-center">
      <div className="max-w-xl flex flex-col py-10 justify-center  items-center">
        <h1 className="text-6xl text-center  font-jostBold ">
          Want you to Boost your Business?
        </h1>
        <p className="font-jostRegular text-[#61646B] text-center text-xl max-w-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <style jsx>{`
        .card {
          max-height: 360px;

          background: #ffffff;
          box-shadow: 0px 10px 50px 5px rgba(0, 0, 0, 0.15);

          border-radius: 20px;
        }
        .card:hover {
          box-shadow: 0px 65px 150px 10px rgba(125, 131, 252, 0.25);
        }
      `}</style>
      <div className="grid gap-10 items-center md:grid-cols-2 lg:grid-cols-3">
        {data.map((n, index) => {
          return (
            <div
              key={index}
              className="flex flex-col  card py-10 max-w-[360px] sm:w-[360px] hover:border-[#3E3FD8] hover:border-2"
            >
              <div>
                <img src={n.img} width="170" height="170" />
              </div>
              <div className="max-w-xs px-5 -mt-10">
                <h1 className="font-jostBold text-2xl text-[#2E323B]">
                  {n.title}
                </h1>
                <p className="font-jostRegular text-[#61646B] py-2">{n.text}</p>
                <h2 className="font-jostMedium text-xl text-[#3E3FD8] flex items-center">
                  {' '}
                  Read More{' '}
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    className="ml-2 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L8 0.226497V11.7735L18 6ZM0 7H9V5H0V7Z"
                      fill="#3E3FD8"
                    />
                  </svg>
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
