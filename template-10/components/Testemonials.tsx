import React from 'react'

export default function Testemonials() {
  return (
    <div className="py-10 min-h-[80vh]">
      <div className="text-center py-20 ">
        <h3 className="font-jostRegular text-2xl text-[#3E3FD8]">TESTEMONIALS</h3>
        <h1 className="font-jostBold text-5xl text-[#2E323B]">What The People Thinks About Us</h1>
      </div>
      <style jsx>{`
        .testemonialsCard {
          width: 360px;
          max-height: 204px;

          background: #ffffff;
          box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.05);
          border-radius: 40px;
        }
        .testemonialsCard:hover {
          border: 2px solid #3e3fd8;
          box-sizing: border-box;
          box-shadow: 4px 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x items-center container mx-auto justify-center">
        <div className="flex flex-col testemonialsCard p-5 ">
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                John McCulling
              </div>
              <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                CEO / Datadrift
              </p>
            </div>
          </div>

          <div className="text-gray-600 text-left px-3 pt-7 max-w-sm">
            Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit
          </div>
        </div>{' '}
        <div className="flex flex-col testemonialsCard p-5 ">
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                John McCulling
              </div>
              <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                CEO / Datadrift
              </p>
            </div>
          </div>

          <div className="text-gray-600 text-left px-3 pt-7 max-w-sm">
            Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit
          </div>
        </div>{' '}
        <div className="flex flex-col testemonialsCard p-5 ">
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                loading="lazy"
                alt="Photo by Radu Florin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">
                John McCulling
              </div>
              <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                CEO / Datadrift
              </p>
            </div>
          </div>

          <div className="text-gray-600 text-left px-3 pt-7 max-w-sm">
            Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit
          </div>
        </div>
      </div>
    </div>
  )
}
