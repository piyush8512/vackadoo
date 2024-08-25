import React from "react";

const ServicesOffer = () => {
  return (
    <div className="bg-white text-black text-center h-screen flex flex-col items-center justify-center font-extrabold">
      {/* MEDIA Section */}
      <div className="relative mb-20 md:text-7xl md:mb-16 group">
        <h1 className="md:cursor-pointer text-[50px]">MEDIA</h1>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center justify-center rounded-xl px-12 py-10 bg-black text-white">
            <h1 className=" md:text-sm mb-6">MEDIA</h1>
            <div className="flex space-x-2 ">
              <div className="bg-white text-black font-semibold md:font-bold text-[10px] md:text-sm py-2 px-2 md:py-2 md:px-6 rounded-full">
                content production
              </div>
              <div className="bg-white text-black font-semibold md:font-bold text-[10px] md:text-sm py-2 px-2 md:py-2 md:px-6 rounded-full">
                podcast production
              </div>

              <div className="bg-white text-black font-semibold md:font-bold text-[10px] md:text-sm py-2 px-2 md:py-2 md:px-6 rounded-full">
                event coverage
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <div className="bg-white text-black font-semibold md:font-bold text-[10px] md:text-sm py-2 px-2 md:py-2 md:px-6 rounded-full">
                Campaign management
              </div>

              <div className="bg-white text-black font-semibold md:font-bold text-[10px] md:text-sm py-2 px-2 md:py-2 md:px-6 rounded-full">
                photoshoots & videoshoots
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MANAGEMENT Section */}
      <div className="relative md:text-7xl md:mb-16 mb-20  group">
        <h1 className="cursor-pointer text-[50px]">MANAGEMENT</h1>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center justify-center rounded-xl px-12 py-10 bg-black text-white">
            <h1 className="md:text-sm mb-8">MANAGEMENT</h1>
            <div className="flex flex-row space-x-4">
              <button className="bg-white text-black font-bold text-[12px] md:text-sm md:py-2 md:px-6 px-4 rounded-full">
                BRAND
              </button>
              <button className="bg-white text-black font-bold text-[12px] md:text-sm md:py-2 md:px-6  px-5 rounded-full">
                SOCIAL PLATFORM
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESIGN Section */}
      <div className="relative md:text-7xl md:mb-6 mt-4  group">
        <h1 className="md:cursor-pointer text-[50px]">Design</h1>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center justify-center rounded-xl px-12 py-10 bg-black text-white">
            <h1 className=" mb-8">Design</h1>
            <div className="flex space-x-2">
              <div className="bg-white text-black font-semibold text-[10px] md:text-[20px] py-1 px-2 md:px-4  rounded-full">
                MOTION GRAPHIC
              </div>
              <div className="bg-white text-black font-semibold text-[10px]  md:text-[20px] py-1 px-2 md:px-4 rounded-full">
                LOGO WITH BRANDING
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-[20px] py-1 px-2 md:px-4 rounded-full">
                ANIMATION
              </div>
            </div>
            <div className="flex space-x-4 pt-5">
              <div className="bg-white text-black font-semibold text-[10px] md:text-[20px] py-1 px-2 md:px-4 rounded-full">
                ILLUSTRATIONS
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-[20px] py-1 px-2 md:px-4 rounded-full">
                WEB DESIGN
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-[20px] py-1 px-2 md:px-4 rounded-full">
                GRAPHICS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
