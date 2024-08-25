import React, { useRef, useState } from "react";
import alposter from "../../assets/images/al/alposter.png";

import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";

const AdroitLeathersSection = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FSET%201553.mp4?alt=media&token=584fce4e-e9fb-49f9-9455-304a55eb4045",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  const handleNext = () => {
    if (currentIndex < videoUrls.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white p-2 md:p-8">
      <div className="text-3xl md:text-7xl  text-[#4F1D1C] text-center md:text-right md:mx-20 md:pr-16">
        <h1 className="font-bold">ADROIT LEATHERS</h1>
        <div className=" md:hidden grid grid-cols-3 gap-1 md:gap-4 mt-6 md:mx-48">
          <div className="grid-col-1  text-[8px] px-1 text-white bg-[#B58543]">
            Brand Managment
          </div>
          <div className="grid-col-1  text-[8px] px-1  text-white bg-[#B58543]">
            Photoshoots & Videoshoots
          </div>
          <div className="grid-col-1  text-[8px] px-1 text-white bg-[#B58543]">
            Email Marketing
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-24 gap-6">
        <div className="mt-4 md:mt-12 flex items-center justify-center drop-shadow-xl relative py-4 md:py-9">
          <div className="relative overflow-hidden w-full max-w-[1500px]">
            <div
              className="flex space-x-2 md:space-x-4 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain rounded-xl max-h-[400px] md:max-h-[600px] drop-shadow-2xl "
                  loop
                  muted
                  ref={videoRefs[index + 1]}
                  onMouseOver={() => handleMouseOver(videoRefs[index + 1])}
                  onMouseLeave={() => handleMouseLeave(videoRefs[index + 1])}
                >
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
            {/* Left Button */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handlePrev}
            >
              &#8249;
            </button>
            {/* Right Button */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="py-4 md:py-8">
          <div className="hidden md:flex md:justify-center md:mt-10  gap-12">
            <div class="grid grid-cols-2 gap-5">
              <div className="bg-[#B58543]   col-span-2 text-center  p-3 ">
                Photoshoots & Videoshoots
              </div>
              <div className="bg-[#B58543] p-3">Brand Managment</div>
              <div className="bg-[#B58543] p-3 text-center ">
                Email Marketing
              </div>
            </div>
          </div>

          <div className="text-black text-justify text-[22px] md:text-lg md:text-lg  py-7  md:px-16">
            Vackadoo manages Adroit Leathers' social media presence across
            multiple platforms, including Facebook, LinkedIn, and Instagram. Our
            approach is to create professional product videos that accurately
            showcase their offerings and attract potential customers.
            Additionally, we run targeted email marketing campaigns to generate
            leads and drive customer engagement. Our comprehensive strategy
            ensures that Adroit Leathers maintains a strong and consistent brand
            presence, effectively reaching and engaging with their target
            audience across all channels.
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-6 flex justify-center rounded-xl drop-shadow-xl relative overflow-hidden ">
        <img
          src={alposter}
          className="object-contain h-auto rounded-xl max-h-[350px] md:max-h-[700px]"
          alt="Adroit Leathers Poster"
        />
      </div>
      <div className="flex justify-center mt-12 ">
        <img
          src={horizontal}
          alt="Footer Image"
          className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <img src={horizontal2} className="hidden md:block" />
      </div>
    </section>
  );
};

export default AdroitLeathersSection;
