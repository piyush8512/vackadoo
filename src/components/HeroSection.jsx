import React, { useEffect } from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const spotlightSize = 400;

    const handleMouseMove = (event) => {
      // Get the coordinates of the title
      let titleRect = document.querySelector(".title").getBoundingClientRect();

      // Grab the mouse's X-position
      let mouseX = event.clientX;

      // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
      let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;

      // Grab the mouse's Y position
      let mouseY = event.clientY;

      // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
      let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

      // Set x and y position of spotlight
      const element = document.querySelector(".title");
      element.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="title-wrapper">
      <div className="title">
        <div className="hero-section">
          <div className="hidden md:block">
            <div className="text-3xl text-center">To Bring the</div>
            <div className="text-9xl text-center font-extrabold spotlight">
              <a href="/service">SPOLIGHT</a>
            </div>
            <div className="text-3xl text-center">On Your Brand</div>
          </div>

          <div className="w-full h-[100vh]  w-screen md:hidden flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-400 text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Vackadoo, where creativity meets innovation!
            </h1>
            <p className="pt-12 text-lg md:text-2xl text-gray-300 mb-8">
              A passionate team of dreamers, designers, and digital wizards,
              dedicated to turning your vision into a compelling visual story.
            </p>
            <div className="animate-bounce mb-32">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
