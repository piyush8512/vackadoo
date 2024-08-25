import React from "react";
import domain from "../assets/brand/domain.png";
import domain1 from "../assets/brand/domain1.png";
import domain2 from "../assets/brand/domain2.png";
import Paul from "../assets/brand/Paul.png";
import Paul1 from "../assets/brand/Paul1.png";
import Paul2 from "../assets/brand/Paul2.png";
import gnixar from "../assets/brand/gnixar.png";
import gnixar1 from "../assets/brand/gnixar1.png";
import gnixar2 from "../assets/brand/gnixar2.png";
import Leather from "../assets/brand/Leather.png";
import Leather1 from "../assets/brand/Leather1.png";
import Leather2 from "../assets/brand/Leather2.png";

const Clients = () => {
  return (
    <div>
      {/* JURIS DOMAIN Section */}
      <div className="bg-[#FEF4D8] mx-4 md:mx-12 lg:mx-36 mt-9 rounded-md">
        <div className="p-4 lg:p-6 text-black">
          <h1 className="text-3xl font-bold mb-4 text-center">JURIS DOMAIN</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="order-1 lg:order-1">
              <img
                src={domain}
                alt="Domain Logo"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="order-2 lg:order-2">
              <p className="font-medium text-sm lg:text-base p-2 lg:p-5 lg:font-semibold">
                For the Juris Domain book launch campaign, we meticulously
                curated a comprehensive A-Z campaign plan and devised an
                innovative media strategy. Our team handled everything from
                ideation to execution, ensuring a seamless and impactful launch.
                We amplified the book's presence through targeted PR on social
                media, engaging podcast episodes, extensive event coverage, and
                strategic collaborations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:mt-12">
                <img
                  src={domain1}
                  alt=""
                  className=" hidden lg:block w-full h-auto rounded-md"
                />
                <img
                  src={domain2}
                  alt=""
                  className=" hidden lg:block w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE PAUL’S BIRYANI Section */}
      <div className="bg-[#FA6817] mx-4  md:mx-12 lg:mx-36 mt-9 rounded-md">
        <div className="p-4 lg:p-6 text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Paul's Biryani
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:order-2">
              <img
                src={Paul}
                alt="Domain Logo"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="lg:order-1">
              <p className="font-medium text-sm lg:text-base p-2 lg:p-5 lg:font-semibold">
                Paul's Biryani is a beloved food brand renowned for its
                delectable Hyderabadi biryanis and authentic flavors. We manage
                all of Paul's Biryani's social media, crafting engaging and
                visually enticing content that perfectly captures the essence of
                their delicious offerings and rich heritage. Our collaboration
                has successfully amplified their brand presence, creating a
                captivating online experience that resonates with food lovers
                everywhere.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-8">
                <img
                  src={Paul1}
                  alt=""
                  className="hidden lg:block w-full h-auto rounded-md"
                />
                <img
                  src={Paul2}
                  alt=""
                  className="hidden lg:block w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#10255C] mx-4 md:mx-12 lg:mx-36 mt-9 rounded-md">
        <div className="p-4 lg:p-6 text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">GNIXAR</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4 m-6 mt-4">
              <img
                src={gnixar}
                alt=""
                className="hidden lg:block w-full h-auto rounded-md"
              />
              <img
                src={gnixar1}
                alt=""
                className="hidden lg:block w-full h-auto rounded-md"
              />
              <img
                src={gnixar2}
                alt="Domain Logo"
                className="lg:hidden w-full h-24 rounded-2xl"
              />
            </div>
            <div className="lg:order-2">
              <p className="font-medium text-sm lg:text-base p-2 lg:p-5 lg:font-semibold">
                Gnixar is a revolutionary online study platform that offers the
                "Study Now, Pay Later" concept, providing students with flexible
                financial options for their education. We collaborated closely
                with Gnixar to enhance their social media presence, seamlessly
                blending their brand identity with captivating, student-oriented
                content. Our efforts focused on crafting engaging and innovative
                concept ideas tailored to the needs and interests of students,
                ensuring a robust and appealing online presence for Gnixar.
              </p>
              <div className="">
                <img
                  src={gnixar2}
                  alt=""
                  className="hidden lg:block w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#353535] mx-4 md:mx-12 lg:mx-36 mt-9 rounded-md">
        <div className="p-4 lg:p-6 text-white">
          <h1 className="text-3xl font-bold mb-4 text-center">
            ADROIT LEATHERS
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:order-1">
              <img
                src={Leather}
                alt="Domain Logo"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="lg:order-2">
              <p className="font-medium text-sm lg:text-base p-2 lg:p-5 lg:font-semibold">
                For the Juris Domain book launch campaign, we meticulously
                curated a comprehensive A-Z campaign plan and devised an
                innovative media strategy. Our team handled everything from
                ideation to execution, ensuring a seamless and impactful launch.
                We amplified the book's presence through targeted PR on social
                media, engaging podcast episodes, extensive event coverage, and
                strategic collaborations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-12">
                <img
                  src={Leather1}
                  alt=""
                  className="hidden lg:block w-full h-auto rounded-md"
                />
                <img
                  src={Leather2}
                  alt=""
                  className="hidden lg:block w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Clients;
