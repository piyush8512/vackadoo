import React, { useRef, useState } from "react";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";

const HorizonStudy = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2F106.mp4?alt=media&token=df1be766-6664-4321-a429-dab57f56b5d5",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_1999.MP4?alt=media&token=93acf0e2-7973-416f-9edf-84e4ea5e29b4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2001.MP4?alt=media&token=00ec301c-b42d-402e-8025-01c9d0f9bb7b",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2002.MP4?alt=media&token=5fcf043b-88fc-40bb-a523-579f1d791096",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2003.MP4?alt=media&token=7f0890d2-3b3e-4962-81d7-a59082d5dc04",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2004.MP4?alt=media&token=4e805696-bf86-4749-9505-f854ae6052b1",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2005.MP4?alt=media&token=90c54190-036a-49eb-bab1-510aa530a030",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2FIMG_2006.MP4?alt=media&token=e1d92962-f0b4-4b18-ad9f-f6f9254b8e88",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (videoRefs) => {
    if (videoRefs.current) {
      videoRefs.current.muted = false;
      videoRefs.current.play();
    }
  };

  const handleMouseLeave = (videoRefs) => {
    if (videoRefs.current) {
      videoRefs.current.muted = true;
      videoRefs.current.pause();
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
      <main className="flex-grow">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-yellow-500">
            HORIZON STUDY CIRCLE
          </h1>

          <div className="grid grid-cols-3 text-[8px] md:text-sm gap-2 md:gap-4 mt-6 mx-6  md:mx-48">
            <div className="grid-col-1 md:py-2  py-1 bg-yellow-500">
              Brand Managment
            </div>
            <div className="grid-col-1 md:py-2   py-1   bg-yellow-500">
              Campaign Managment
            </div>
            <div className="grid-col-1 md:py-2  py-1  bg-yellow-500">
              Motion Graphic
            </div>
          </div>

          <div className="mt-6 md:mt-12 flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
            <video
              className="object-contain h-auto rounded-xl max-h-[300px] md:max-h-[500px]"
              muted
              loop
              ref={videoRefs[0]}
              onMouseOver={() => handleMouseOver(videoRefs[0])}
              onMouseLeave={() => handleMouseLeave(videoRefs[0])}
            >
              <source src={videoUrls[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-12 text-[22px] md:mt-12 h-auto flex justify-center mx-2 md:mx-56 text-black text-justify text-base md:text-xl">
            <p>
              Vackadoo played a key role in supporting Horizon Study Circle
              (HSC) at Ambedkar University by meticulously executing various
              events and programs. Our contribution included the development of
              engaging posts and reels that highlighted the essence of HSC’s
              activities. We also managed HSC's social media presence on
              platforms such as Instagram and LinkedIn, improving their
              visibility and engagement within the university community. Through
              our efforts, we have fostered a sense of community and camaraderie
              at HSC that reflects the warmth and unity that characterizes a
              community. Vackadoo's involvement was instrumental in fostering a
              closer and more connected environment for HSC’s members.
            </p>
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
          <div className="flex justify-center mt-12 ">
            <img
              src={horizontal}
              alt="Footer Image"
              className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
            />
            <img src={horizontal2} className="hidden md:block" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HorizonStudy;
