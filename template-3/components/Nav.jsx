import React from "react";

export default function Nav() {
  const navData = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Work",
      href: "#work",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className="max-w-xl font-sans font-bold  py-10">
      <div className=" flex justify-evenly text-2xl ">
        {navData.map((n) => {
          return <div>{n.name}</div>;
        })}
      </div>
    </div>
  );
}
