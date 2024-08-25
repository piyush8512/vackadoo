// import React from "react";
// import logo from "../assets/images/logo.png";

// const Footer = () => {
//   return (
//     <footer className="footer-section bg-white md:bg-black ">
//       <div className="hidden md:block flex grid grid-cols-1 justify-items-center">
//         <section className="relative  overflow-hidden">
//           <div className=" ">
//             <img src={logo} alt="Logo" className="h-80 mb-36 item-center" />
//           </div>
//         </section>
//       </div>
//       <div className="md:hidden grid grid-cols-1 justify-items-center">
//         <section className="relative  overflow-hidden">
//           <div className=" ">
//             <img src={logo} alt="Logo" className="h-80 mb-36" />
//           </div>
//         </section>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import horizontal2 from "../assets/images/halffooter.gif";

const Footer = () => {
  return (
    <footer className="footer-section bg-white md:bg-black">
      <div className="flex justify-center items-center md:h-full">
        <section className="relative overflow-hidden">
          <div></div>
          <img src={logo} alt="Logo" className="h-80 my-36 hidden md:block" />
          <img src={logo2} alt="Logo" className="h-60  md:hidden" />
        </section>
      </div>
      <div className="flex justify-center md:mt-12">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[500px] h-auto object-contain md:max-w-[700px] md:hidden"
        />
      </div>
    </footer>
  );
};

export default Footer;
