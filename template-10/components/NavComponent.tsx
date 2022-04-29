import React, { useRef, useState } from 'react'
import useOnClickOutside from './useOnClickOutside'

import Link from 'next/link'

const navData = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Work',
    href: '#work',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function NavComponent() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null)

  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false)
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <div className="absolute top-0 z-50  w-full py-3 text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <div className="px-4 flex justify-around">
        <div>
          <h1 className="font-jostBold text-4xl text-[#3E3FD8] ">Agency</h1>
        </div>
        <div className="sm:flex justify-around hidden">
          {navData.map((n, index) => {
            return (
              <Link href={n.href} key={index} passHref>
                <h1 className="mx-4 font-jostRegular text-2xl  ">{n.name}</h1>
              </Link>
            )
          })}
        </div>
        <div>
          <button
            type="button"
            className="bg-[#EEF4FF] rounded-xl w-[170px] h-[60px] text-[#3E3FD8] "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
