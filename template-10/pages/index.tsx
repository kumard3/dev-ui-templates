/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import * as React from 'react'
import Boost from '../components/Boost'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import NavComponent from '../components/NavComponent'
import NewsLetter from '../components/NewsLetter'
import Testemonials from '../components/Testemonials'

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <div className="bg-[#EEF4FF] min-h-screen relative">
        <NavComponent />
        <Header />
      </div>

      <div className="grid sm:grid-cols-2 items-center">
        <div>
          <img src="Answer.png" />
        </div>
        <div className="max-w-xl px-4 ">
          <h1 className="font-jostBold text-4xl py-4 md:leading-[1.3] md:text-[60px]">
            Take Your Online marketing to the next level.
          </h1>

          <div className="flex">
            <div>
              <img src="Group14.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Direct Scheduling</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group15.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Reminders</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group16.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Shop Grid</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Boost />

      <div className="flex flex-wrap px-4 justify-center items-center container mx-auto">
        <div className="max-w-xl">
          <h1 className="font-jostBold text-[#2E323B] text-5xl sm:text-6xl">
            Unique Solutions for Your Business
          </h1>
          <p className="font-jostRegular text-xl py-10 text-[#61646B]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className="flex flex-around">
            <div className="bg-[#FCDDEC] mx-3  flex items-center text-left justify-center flex-col rounded-xl w-[170px] h-[100px]">
              <h1 className="text-[#FF3D68] font-jostBold text-6xl">50+</h1>
              <p className="text-lg font-jostRegular">Total Client</p>
            </div>
            <div className="bg-[#FCDDEC]  flex items-center text-left justify-center flex-col rounded-xl w-[170px] h-[100px]">
              <h1 className="text-[#3E3FD8] font-jostBold text-6xl">100+</h1>
              <p className="text-lg font-jostRegular">Project Done</p>
            </div>
          </div>
        </div>
        <div>
          <img src="Recruiter.png" loading="lazy" width="650" height="650" />
        </div>
      </div>
      <Testemonials />
      <NewsLetter />
      <Fotter />
    </div>
  )
}
