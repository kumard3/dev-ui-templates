/* eslint-disable @next/next/no-img-element */
import React from "react";


export default function NewsLetterFeed() {
  return (
    <div className="my-40 grid md:grid-cols-2 gap-4 container mx-auto px-2 ">
      <div>
        <img src="newsFeed.png" />
      </div>
      <div>
        <h1 className="font-orbitron text-4xl">Subscribe to us</h1>
        <p  className="font-spartan text-xl py-10">
          Specially developed to help restore a more youthful appearance with
          improved radiance and bounce.
        </p>
        <div className="flex">
          <input className="py-3 rounded-l-lg px-10 text-left" placeholder="Your work email address"/>
          <button className='gradient py-3 rounded-r-lg px-10 '>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
