import React from 'react'

export default function NewsLetter() {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center  rounded-lg p-4 sm:p-8">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-indigo-500 font-jostBold  text-4xl sm:text-5xl font-bold text-center">
                Get the latest updates
              </h2>
              <p className="text-gray-500 font-jostRegular text-center">
                Sign up for our newsletter
              </p>
            </div>

            <form className="w-full max-w-xl text-xl font-jostMedium flex gap-2 mb-3 sm:mb-5 border-2 p-2 rounded-2xl border-black">
              <input
                placeholder="Email"
                className="w-full flex-1  text-gray-800    focus:ring ring-indigo-300 rounded-2xl outline-none transition duration-100 px-3 py-2"
              />

              <button className="inline-block font-jostBold bg-[#3E3FD8] hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-2xl outline-none transition duration-100 px-8 py-3">
                Send
              </button>
            </form>

            <p className="text-gray-400 text-xs font-jostRegular text-center">
              By signing up to our newsletter you agree to our{' '}
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Term of Service
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
