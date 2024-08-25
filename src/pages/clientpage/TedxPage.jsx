import React, { useRef, useState } from "react";
import tedx1 from "../../assets/images/tedx/tedx1.png";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";

const TedxPage = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/102.MP4?alt=media&token=f4abdfee-06f0-4dbb-97a8-4c434870dcf5",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2F1709699757377963.mp4?alt=media&token=204ab030-21b9-44ea-8bc6-ef2075e95456",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FIMG_5288.MOV?alt=media&token=3b8aa396-c1c5-407e-9a6c-4fc84fba7aa4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.20.00%20PM.mp4?alt=media&token=a1ddff64-aa51-429a-aef2-fe948c96445a",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.27.48%20PM.mp4?alt=media&token=246e9273-5068-4976-a372-d7ef765bae75",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.30.00%20PM%20(1).mp4?alt=media&token=d39282e9-aed1-40ad-9369-efc93a717822",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.31.32%20PM.mp4?alt=media&token=35bd4654-8d2d-4bf1-9b98-dbb550261b2d",
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
      <main className="text-center  md:p-8">
        <h1 className="text-2xl md:text-7xl font-bold text-black">
          <span className="text-2xl md:text-7xl font-bold text-red-600">
            TEDx
          </span>
          SHIVAJICOLLEGE
        </h1>
        <div className=" md:hidden grid grid-cols-3 gap-2 md:gap-4 mt-6 mx-2 md:mx-48">
          <div className="grid-col-1 py-2 text-[12px] text-white  bg-red-600">
            Brand Managment
          </div>
          <div className="grid-col-1 py-2  text-[12px] text-white  bg-red-600">
            Photoshoots & Videoshoots
          </div>
          <div className="grid-col-1 py-2 text-[12px] text-white  bg-red-600">
            Email Marketing
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mx-4 md:mx-40 mt-8 md:mt-16">
          <div className="drop-shadow-2xl">
            <img src={tedx1} alt="" className="rounded-xl" />
          </div>
          <div className="col-span-2 md:p-0 py-7 text-black text-justify text-base md:text-lg">
            <div className="hidden md:block">
              <div className="grid grid-cols-3 md:gap-2 text-white mt-6 text-center pb-3 mx-2 ">
                <div className="grid-col-1 bg-red-600 py-2  ">
                  Event Coverage
                </div>
                <div className="grid-col-1 py-2   bg-red-600">
                  Content Production
                </div>
                <div className="grid-col-1 py-2 bg-red-600">Social Media</div>
              </div>
            </div>
            <p className="md:px-3 text-[22px]">
              Vackaoo played a pivotal role in the TEDxShivaji College event by
              providing comprehensive PR support and delivering a diverse range
              of video content including hype and formal videos. This
              collaboration not only amplified the event's reach but also
              sparked meaningful conversations and interactions among
              TEDxShivaji College members, solidifying their reputation as a
              premier platform for intellectual discourse and thought sharing.
              One of the standout achievements of the event, sponsored by
              Vackadoo, was its extensive coverage.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-center mx-4 md:mx-40 drop-shadow-xl relative">
          <video
            className="object-contain rounded-xl h-auto max-h-[400px] md:max-h-[600px]"
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

        <div className="mt-8 md:mt-12  flex justify-center mx-4 md:mx-52 text-black text-justify text-base md:text-lg">
          Vackadoo meticulously captured the event’s most significant moments
          through professional photography and videography, resulting in
          visually captivating content that highlighted the essence and impact
          of each session. This in turn, significantly boosted their digital
          presence. Moreover, Vackadoo created engaging short reels that
          effectively showcased the highlights of TEDxShivaji College, further
          enhancing the event's visibility and appeal.
        </div>

        <div className="mt-8 md:mt-12 flex items-center justify-center drop-shadow-xl relative">
          <div className="relative overflow-hidden w-full max-w-[1200px]">
            <div
              className="flex space-x-2 md:space-x-4 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain rounded-xl max-h-[400px] md:max-h-[600px]"
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
        <div className="flex justify-center mt-12 ">
          <img
            src={horizontal}
            alt="Footer Image"
            className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
          />
          <img src={horizontal2} className="hidden md:block" />
        </div>
      </main>
    </div>
  );
};

export default TedxPage;
