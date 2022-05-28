/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <div id="contact" className="py-10 h-[50vh] flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-5xl">Get in Touch</h1>
        <p>So that we can talk more about...</p>
      </div>
      <div className="flex justify-center items-center">
        <img src="/Mail.svg" alt="Image" />
        <img src="/Dribble.svg" alt="Image" />
        <img src="/LinkedIn.svg" alt="Image" />
      </div>
    </div>
  );
}
