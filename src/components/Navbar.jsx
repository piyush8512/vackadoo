import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import rat from "../assets/images/rat.png";

import React from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const togglenavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky text-black  top-0 py-4 bg-white border-neutral-600/80 z-40 ">
      <div className="container  mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex  flex-shrink-0">
            <a href="./">
              <img src={rat} className="h-12 pl-2 md:hidden" />
              <h1 className="md:block  hidden text-black  text-4xl font-bold">
                Vackadoo
              </h1>
            </a>

            <span className="text-xl tracking-tight"></span>
          </div>

          <div className="hidden lg:flex space-x-6 items-center ml-auto">
            <a
              href="/ScheduleCall"
              className="py-2 px-6 text-white  rounded-full hover:bg-[#242424]  bg-zinc-800"
            >
              Schedule a Call
            </a>
            <span className="h-6 border-r border-black "></span>{" "}
            {/* Vertical line */}
            <a href="/Info" className="py-2 px-3 text-xl font-semibold">
              Info
            </a>
          </div>

          <div className="lg:hidden md:flex-col justify-end pr-4 py-2 ">
            <a
              href="/ScheduleCall"
              className=" text-[10px] mx-4 p-3 px-4 text-white  rounded-full hover:bg-[#242424]  bg-zinc-800"
            >
              Schedule a Call
            </a>
            <button onClick={togglenavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed font-medium right-0 z-20 bg-white text-black  p-4 pt-2 flex flex-col justify-center items-center lg:hidden rounded-xl">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
