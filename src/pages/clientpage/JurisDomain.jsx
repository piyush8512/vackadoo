import React, { useRef, useState } from "react";

import juris from "../../assets/images/juris/juris1.png";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";

const JurisDomain = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2F1716915757048897.MP4?alt=media&token=34d9bcf3-7345-4fcf-9ddc-2a551ab946b7",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8588.MOV?alt=media&token=5316551d-7672-4480-8d75-625a5670db96",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8638.MP4?alt=media&token=48391181-dd3e-4e37-9cd1-ae3ee10e30d0",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8724.MP4?alt=media&token=1b8f189f-ede8-4a29-ba82-69ad08294a72",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8802.MP4?alt=media&token=881f5f7c-c6ed-4fe3-beb2-049298c3c16e",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_9039.MOV?alt=media&token=b42770cb-10f4-4426-a230-e4eff766b576",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.05.28%20PM.mp4?alt=media&token=21625610-451d-4d50-af49-fdf15362b661",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.20.58%20PM.mp4?alt=media&token=ef4000b7-cad3-4a03-aa49-89afa075fab6",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.21.08%20PM.mp4?alt=media&token=7668c2df-dbcf-4bd1-b4b0-0006339af920",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-17%20at%203.06.03%20PM.mp4?alt=media&token=debb2daf-8a29-4442-b22d-7a4a539e0478",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2Fw%20captions.mp4?alt=media&token=716da8d2-e58d-4c68-a37e-9e37e76917b2",
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
    <div className="bg-white">
      <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center">
        <h1
          className="text-4xl md:text-6xl font-bold text-center md:hidden "
          style={{ color: "#94866B" }}
        >
          JURIS DOMAIN
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 md:px-0 gap-2 md:gap-0  px-2 mt-8 md:hidden">
          <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto grid-cols-1 "
          />

          {/* <div className=" grid-cols-1 space-y-4 md:flex-row md:space-x- mt-20">
            <div className="bg-[#94866B] rounded p-3 px-20 w-full"></div>
            <div className="bg-[#94866B] rounded p-3 px-20 w-full"></div>
          </div> */}
          <div className=" grid-cols-1 space-y-7 md:flex-row  mt-10">
            <div className="bg-[#94866B] text-center text-[12px] p-2 ">
              Campaign Managment
            </div>
            <div className="bg-[#94866B] text-center text-[12px] p-2 ">
              Podcast Production
            </div>
            <div className="bg-[#94866B] text-center text-[12px] p-2">
              Event Production
            </div>
          </div>
        </div>

        <div className="md:order-2 mt-8 md:w-1/3 hidden md:block">
          <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto   "
          />
        </div>
        {/* Right Section: Title, Paragraph, and Buttons */}
        <div className=" md:order-1 md:w-1/2">
          <h1
            className="text-4xl md:text-6xl font-bold text-center hidden md:block "
            style={{ color: "#94866B" }}
          >
            JURIS DOMAIN
          </h1>

          <div className="hidden md:flex md:justify-center md:mt-10  gap-12">
            <div class="grid grid-cols-2 gap-5">
              <div className="bg-[#94866B]   col-span-2 text-center  p-3 ">
                Campaign Managment
              </div>
              <div className="bg-[#94866B] p-3">Podcast Production</div>
              <div className="bg-[#94866B] p-3 ">Event Production</div>
            </div>
          </div>

          <p className="md:pt-7 mt-6 text-black text-[22px] md:text-lg text-justify md:px-12 px-2 md:text-justify">
            Vackadoo leads Juris Domain's digital presence and focuses on
            optimizing the Instagram strategy. We were involved in orchestrating
            their book launch event and managing all aspects of photography and
            videography to ensure high-quality documentation of the occasion.
            Our team also created Instagram posts and reel that captured the
            essence of the launch and promoted the book. In addition, we managed
            book orders to ensure a smooth and efficient experience for
            customers. Our comprehensive approach ensures that the Juris Domain
            is consistently identified and accessible to the audience,
            strengthening their digital presence and reaching the market.
          </p>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center drop-shadow-xl relative py-9">
        <div className="relative overflow-hidden w-full max-w-[1500px]">
          <div
            className="flex space-x-4 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {videoUrls.slice(1).map((url, index) => (
              <video
                key={index}
                className="object-contain rounded-xl max-h-[600px] drop-shadow-xl"
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

      <div className="grid grid-cols-1 md:grid-cols-2   my-11">
        <div className="order-1 md:order-1">
          <div className="mt-12 flex items-center md:mx-20 mx-8 drop-shadow-xl relative ">
            <video
              className="object-contain rounded-xl drop-shadow-xl"
              loop
              muted
              ref={videoRefs[0]}
              onMouseOver={() => handleMouseOver(videoRefs[0])}
              onMouseLeave={() => handleMouseLeave(videoRefs[0])}
            >
              <source src={videoUrls[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mt-8 text-black text-[22px] md:text-lg md:text-justify text-justify  md:pr-36 mx-auto pt-7 order-2 md:order-1 px-2 md:px-12 ">
          <p>
            Vackadoo leads Juris Domain's digital presence and focuses on
            optimizing the Instagram strategy. We were involved in orchestrating
            their book launch event and managing all aspects of photography and
            videography to ensure high-quality documentation of the occasion.
            Our team also created Instagram posts and reel that captured the
            essence of the launch and promoted the book.
          </p>
        </div>
      </div>

      {/* Footer Image */}
      <div className="flex justify-center mt-12 ">
        <img
          src={horizontal}
          alt="Footer Image"
          className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <img src={horizontal2} className="hidden md:block" />
      </div>
    </div>
  );
};

export default JurisDomain;
