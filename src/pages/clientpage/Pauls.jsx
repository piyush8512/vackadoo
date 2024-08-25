import React, { useRef, useState } from "react";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Paulsmarquee from "../../components/paulsmarquee";

const Pauls = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2F1718652608022865.mp4?alt=media&token=0cbbb2be-fd92-4301-a0f0-e2fe067f828f",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_0010.MP4?alt=media&token=72513e4b-110c-429c-8168-f0764031fc14",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_1272%20(1).MP4?alt=media&token=89b79e6a-d4ee-49ce-a9fe-1d4291c3b369",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_7291.MOV?alt=media&token=6610cf23-41bc-4b08-8f51-08ea07622698",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_8647.MP4?alt=media&token=76f51cd8-253a-425f-8304-968ca61f572c",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_9636.MOV?alt=media&token=2b35f330-b6eb-4e68-a781-529113ed7477",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FPaul's%20biryani%20offer.mp4?alt=media&token=a525c52e-0d61-4e8e-980c-c6ac67dd93b3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FTimeline%201%20(3).mov?alt=media&token=6685e78f-70ab-4a8d-8a1d-36e14c157724",
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
    <div className="bg-white">
      {/* Main Content */}
      <main className="text-center p-2">
        <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center">
          <h1
            className="text-2xl md:text-6xl font-bold text-center md:hidden "
            style={{ color: "#FF8412" }}
          >
            THE PAUL’S BIRYANI
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-8 md:hidden">
            <div className=" flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
              <video
                className="object-contain h-auto  drop-shadow-xl rounded-xl max-h-[400px] md:max-h-[700px]"
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
            {/* <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto grid-cols-1 "
          /> */}

            <div className=" grid-cols-1 space-y-7 md:flex-row   mt-">
              6
              <div className="bg-[#FF8412] text-[16px]  rounded py-1 w-full">
                Brand Managment
              </div>
              <div className="bg-[#FF8412] text-[16px] rounded py-1  w-full">
                Podcast Production
              </div>
              <div className="bg-[#FF8412] text-[16px] rounded py-1  w-full">
                Content Production
              </div>
              <div className="bg-[#FF8412] text-[16px] rounded py-1  w-full">
                Product Photoshoots
              </div>
            </div>
          </div>

          <div className="md:order-1 mt-8 md:w-1/3 hidden md:block">
            {/* <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto   "
          /> */}
            <div className=" flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
              <video
                className="object-contain h-auto  drop-shadow-xl rounded-xl max-h-[300px] md:max-h-[700px]"
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
          </div>
          {/* Right Section: Title, Paragraph, and Buttons */}
          <div className=" md:order-2 md:w-1/2">
            <h1
              className="text-4xl md:text-6xl font-bold text-center hidden md:block "
              style={{ color: "#FF8412" }}
            >
              THE PAUL’S BIRYANI
            </h1>

            <div className="hidden md:flex md:justify-center md:mt-10  gap-12">
              <div class="grid grid-cols-2 gap-8">
                <div className="bg-[#FF8412] p-2 ">Brand Managment</div>
                <div className="bg-[#FF8412] p-2">Podcast Production</div>
                <div className="bg-[#FF8412] p-2 ">Content Production</div>
                <div className="bg-[#FF8412] p-2 space ">
                  Product Photoshoots
                </div>
              </div>
            </div>

            <p className=" hidden md:block md:pt-7 mt-6 text-black text-lg text-justify  md:text-justify">
              Vackadoo provides comprehensive brand management for Paul's
              Biryani covering a broad spectrum of activities from brand logo
              design to implementing social media strategies. We oversee the
              brand presence on various platforms such as Instagram, LinkedIn,
              Twitter, and more, ensuring a consistent and effective digital
              footprint. Our team devises monthly strategies aimed at increasing
              engagement and enhancing brand visibility. This includes curating
              engaging content, including posts and reels, that resonate with
              the target audience. By managing all aspects of social media
              activities, we ensure that Paul's Biryani maintains a dynamic and
              cohesive brand communication, strengthening its connection and
              relationship with customers.
            </p>
            <p className=" md:hidden px-2  mt-10 text-black text-[22px] text-justify  md:text-justify">
              Vackadoo provides comprehensive brand management for Paul's
              Biryani covering a broad spectrum of activities from brand logo
              design to implementing social media strategies. We oversee the
              brand presence on various platforms such as Instagram, LinkedIn,
              Twitter, and more, ensuring a consistent and effective digital
              footprint.
            </p>
          </div>
        </div>

        <Paulsmarquee />

        <p className=" md:hidden px-2  mt-10   md:pt-7 mt-6 text-black  text-justify  md:text-justify">
          Our team devises monthly strategies aimed at increasing engagement and
          enhancing brand visibility. This includes curating engaging content,
          including posts and reels, that resonate with the target audience. By
          managing all aspects of social media activities, we ensure that Paul's
          Biryani maintains a dynamic and cohesive brand communication,
          strengthening its connection and relationship with customers.
        </p>
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
      </main>
    </div>
  );
};

export default Pauls;
