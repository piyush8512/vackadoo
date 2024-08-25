import React, { useRef, useState } from "react";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";

const FiemFoundation = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FDr.%20Jitendra%20Singh%20Reel.mp4?alt=media&token=0073e579-9167-43c2-86b4-5158b0f9a265",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FIMG_0557SEEMA%20JAIN%20FULL%20VIDEO.MOV?alt=media&token=7b8eaa8b-8fd3-4550-ab75-d6ddfb9ba76c4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FSanjay%20Mayukh%20ji%20REEL.mp4?alt=media&token=96c9fdfb-656b-48a7-bfbf-f9d7e779e6e3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FTimeline%201REEL%20(1).mov?alt=media&token=dc723755-dafd-45dd-81cd-2c951e36a108",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2Fashok%20shrivastav%20jiREEL.mp4?alt=media&token=686e7726-02c3-4a8c-a349-0ca643d14189",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FbasuriREEL.mp4?alt=media&token=4ef7418e-1b89-493a-b2b7-be44f3c7cbbe",
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
      videoRef.current.muted = true;
      videoRef.current.pause();
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
    <div className="bg-white min-h-screen flex flex-col">
      <main className="text-center p-2">
        <div className="md:mx-36">
          <h1 className="md:text-7xl text-3xl md:text-left font-bold text-[#3E8D19]">
            <span className="text-3xl md:text-7xl font-bold text-orange-500">
              FIEM
            </span>{" "}
            FOUNDATION
          </h1>
        </div>
        <div className=" md:mx-40 mx-12 text-[12px] grid grid-cols-2 text-white mt-4  md:mt-12 md:mr-80 gap-4 md:text-xl ">
          <div className="grid-cols-1 bg-[#3E8D19] py-2">Event Coverage</div>
          <div className="grid-cols-1 bg-[#3E8D19] py-2">
            Content Production
          </div>
        </div>

        <div className="hidden md:block px-1 md:px-0 text-[22px]  mt-8 md:h-64 flex justify-center md:mx-40 text-black text-justify md:text-lg">
          Vackadoo made substantial contributions to the Fiem Foundation’s
          initiatives by delivering thorough event coverage and robust digital
          management. Our team excelled in capturing each event through
          professional-grade photography, ensuring every moment was documented
          with detail and finesse. We also produced engaging individual and
          event reels that vividly portrayed the essence of the events. To
          further strengthen the foundation's digital footprint, we managed and
          optimized its presence on major social media platforms, including
          Instagram, LinkedIn, Twitter, and YouTube. In addition to content
          creation, Vackadoo offered strategic insight on campaign ideation and
          event naming, ensuring effective messaging was both impactful and
          cohesive. Our comprehensive efforts have strengthened the foundation's
          online presence and deepened community engagement with its mission and
          values.
        </div>

        <div className="order-1 md:order-2 mt-12 flex items-center justify-center drop-shadow-xl relative py-9 ">
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

        <div className="md:hidden px-1 md:px-0 text-[22px]  mt-8 md:h-64 flex justify-center md:mx-40 text-black text-justify md:text-lg">
          Vackadoo made substantial contributions to the Fiem Foundation’s
          initiatives by delivering thorough event coverage and robust digital
          management. Our team excelled in capturing each event through
          professional-grade photography, ensuring every moment was documented
          with detail and finesse. We also produced engaging individual and
          event reels that vividly portrayed the essence of the events. To
          further strengthen the foundation's digital footprint, we managed and
          optimized its presence on major social media platforms, including
          Instagram, LinkedIn, Twitter, and YouTube. In addition to content
          creation, Vackadoo offered strategic insight on campaign ideation and
          event naming, ensuring effective messaging was both impactful and
          cohesive. Our comprehensive efforts have strengthened the foundation's
          online presence and deepened community engagement with its mission and
          values.
        </div>

        <div className="flex justify-center mt-12">
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

export default FiemFoundation;
