import { useNavigate } from "react-router-dom";
import React from "react";
import picture1 from "../assets/brand/Picture1.png";
import picture2 from "../assets/brand/Picture2.png";
import picture3 from "../assets/brand/Picture3.png";
import picture4 from "../assets/brand/Picture4.png";
import picture5 from "../assets/brand/Picture5.png";
import picture6 from "../assets/brand/Picture6.png";
import picture7 from "../assets/brand/Picture7.png";
import picture8 from "../assets/brand/Picture8.png";
import picture9 from "../assets/brand/Picture9.png";
import picture10 from "../assets/brand/Picture10.png";

export default function Marquee() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tedx");
  };
  return (
    <div className="relative flex flex-col items-center md:h-screen w-full md:mt-32 overflow-hidden">
      <h1 className="text-3xl font-bold text-white my-5 mb-20">
        Brand Gallery
      </h1>
      <div className="relative flex max-w-full overflow-x-auto overflow-hidden mb-20 md:py-5">
        <div className="flex animate-marquee w-full ">
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture1}
                  className=" object-cover grayscale"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
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
                  className=" object-cover grayscale"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
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
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
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
                  className=" object-cover grayscale pt-16 "
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
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
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="ric"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center ">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4 ">
                <img
                  src={picture6}
                  className=" object-cover grayscale pt-20 cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="tedx"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture7}
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="savishkar"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture8}
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="Horizon"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture9}
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="y20"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full px-2.5 w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-300">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={picture10}
                  className=" object-cover  pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                  }}
                  alt="zarnik"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
