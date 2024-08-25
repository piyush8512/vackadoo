import React, { useEffect, useRef } from "react";

import HeroSection from "./HeroSection";

import "../css/LandingPage.css";
import arrow from "../assets/images/downarraow.png";

const LandingPage = () => {
  const intro =
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/intro.mov?alt=media&token=1b55cae2-91bd-432f-8607-7ba8200de5d1";
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const video = videoRef.current;

      if (video) {
        if (scrollTop > video.offsetHeight) {
          video.pause();
        } else {
          video.play();
        }

        video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Video Background Section */}
      <section className="relative h-[75vh] md:h-[90vh] overflow-hidden">
        <div className="absolute md:mx-10">
          <video
            ref={videoRef}
            className="md:w-full md:h-full object-cover  py-32 md:py-0 "
            autoPlay
            loop
          >
            <source src={intro} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Arrow Below the Video */}
      <div className=" flex justify-center mt-4">
        <button
          onClick={scrollToNextSection}
          className=" hidden md:block text-white text-4xl bouncy-arrow mb-28"
        >
          <img src={arrow} />
        </button>
      </div>

      {/* Next Section */}
      <section
        id="next-section"
        className="h-screen bg-black flex items-center justify-center"
      >
        <HeroSection />
      </section>
    </div>
  );
};

export default LandingPage;
