import React from "react";
import Ashu from "../assets/images/Ashu.png";
import Ridhi from "../assets/images/Ridhi.png";
import footer2 from "../assets/images/footer2.gif";

const Info = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between items-center">
      <main className="text-center max-w-6xl mx-auto">
        <div className="mt-12 flex justify-center md:mx-40 text-black text-left text-xl">
          <h1 className=" hidden md:block md:text-4xl font-bold text-black m-3">
            Welcome to Vackadoo, where creativity meets innovation!
          </h1>
          <p className=" md:px-1 mx-3 text-[20px] md:text-xl text-justify text-black md:m-3  md:pt-8">
            <h1 className="py-2    md:hidden">
              {" "}
              Welcome to Vackadoo, where creativity meets innovation!
            </h1>
            We are a passionate team of dreamers, designers, and digital
            wizards, dedicated to turning your vision into a compelling visual
            story. As a multimedia agency, we specialize in bringing
            client-centric ideas to life, seamlessly blending creativity with
            cutting-edge technology. We are not just about what we do - it is
            the way we do it.
          </p>
        </div>
        <div className="justify-center grid grid-cols-2 md:ml-28 md:mt-10 mt-8">
          <div className="grid-cols-1 md:ml-96 md:pl-16 pl-20 ml-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="52"
              height="52"
              viewBox="0 0 24 24"
            >
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
            </svg>
          </div>
          <div className="grid-cols-1 md:mb-50 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 50 50"
            >
              <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
            </svg>
          </div>
        </div>
      </main>
      <div>
        <img src={footer2} className="pl-5 pb-6 md:pb-0 md:pl-0" />
      </div>

      <footer className="w-full text-center text-lg bg-black p-6">
        <div className="px-6 relative flex w-full h-16 md:h-36 md:mb-28">
          <div className=" hidden md:block absolute right-24 transform -translate-x-1/2 -translate-y-40 w-44 bg-white">
            <img src={Ridhi} />
          </div>
          <div className="md:hidden absolute left-60    transform -translate-x-2/3 -translate-y-20 w-16 bg-white">
            <img src={Ridhi} />
          </div>
          <div className=" hidden md:block absolute left-72 transform -translate-x-1/2 -translate-y-40 w-44  bg-white  ">
            <img src={Ashu} />
          </div>
          <div className=" md:hidden  absolute left- transform -translate-x-1/2 -translate-y-20 w-16  bg-white  ">
            <img src={Ashu} />
          </div>
        </div>

        <div className="bg-white h-1 my-8 "></div>
        <div className="grid grid-cols-2 justify-start  md:mb-6">
          <div className="text-[14px]  md:text-xl mr-12 grid-cols-1 md:mr-44">
            <p>work with us</p>
          </div>
          <div className=" text-[14px]  md:text-xl grid-cols-1 md:ml-44">
            <a href="mailto:vackadoo@gmail.com">vackadoo@gmail.com</a>
            <p>+91 787683757</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Info;
