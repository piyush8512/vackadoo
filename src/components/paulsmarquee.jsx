import React from "react";

import picture1 from "../assets/brand/Pauls/picture1.png";
import picture2 from "../assets/brand/Pauls/picture2.png";
import picture3 from "../assets/brand/Pauls/picture3.png";
import picture4 from "../assets/brand/Pauls/picture4.png";
import picture5 from "../assets/brand/Pauls/picture5.png";
import picture6 from "../assets/brand/Pauls/picture6.png";
import picture7 from "../assets/brand/Pauls/picture7.jpeg";
import picture8 from "../assets/brand/Pauls/picture8.jpg";
import picture9 from "../assets/brand/Pauls/picture9.jpg";

export default function Marquee() {
  return (
    <div className="relative flex flex-col items-center md:mx-20 md:mt-32 mt-12 overflow-hidden">
      <div className="relative flex max-w-full overflow-hidden py-5">
        <div className="flex animate-marquee w-full">
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture1}
                  className=" object-cover rounded-xl "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                  alt="jurisDomain"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture2}
                  className=" object-cover rounded-xl "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                  alt="Pauls"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture3}
                  className=" object-cover rounded-xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                  alt="AdolfLeather"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture4}
                  className=" object-cover rounded-xl  "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                  alt="gnixar"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture5}
                  className=" object-cover rounded-xl  "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center ">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4 ">
                <img
                  src={picture6}
                  className=" object-cover rounded-xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture7}
                  className=" object-cover rounded-xl  "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture8}
                  className=" object-cover rounded-xl "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture9}
                  className=" object-cover rounded-xl "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "30rem",
                    maxHeight: "30rem",
                  }}
                  alt="y20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
