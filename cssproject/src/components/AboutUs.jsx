import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-[60px] px-[150px] flex sm:px-[20px] flex sm:flex-col ">
      <div className="flex flex-col   w-[42%] sm:w-full ">
        <h2 className="text-[48px] text-[#FFFFFF] font-bold leading-[58px] pl-3 capitalize sm:text-2xl sm:pl-0 sm:mt-[46px] ">
          We are a creative digital agency
        </h2>
        <p className="text-base text-[#E0E5F3] leading-[30px] my-[40px]">
          Dalio started with a vision for building an agency to solve the
          business problems of the future, and that requires a different model.
          We’re not a branding agency that dabbles in tech, and we’re not a
          development shop that leaves you hanging when it’s time to go to
          market.
        </p>
        <p className="text-base text-[#E0E5F3] leading-[30px]">
          We start with human experience and layer in technology and marketing
          to deliver truly integrated digital solutions. This unique set of
          capabilities sets us apart from other agencies and positions DIG to
          help you attack your goals.
        </p>
        <button className="flex items-center justify-center w-max  pl-8 pr-6 rounded-[30px] bg-[#FFC93E] py-[16px]   mt-[44px] sm:mt-8 ">
          <span className="text-[18px] font-medium leading-[22px] ">
            Contact Us
          </span>
          <img src="/images/arrow.png" className="ml-[10px]" alt="" />
        </button>
      </div>
      <div className="flex  flex-col items-start  w-[58%] ml-[46px] sm:ml-0 sm:pr-[60px] sm:mt-[40px]  ">
        <div className="flex items-start">
          <img
            src="/images/about_1.png"
            alt=""
            className="object-contain mr-7 sm:mr-4  "
          />
          <div className="sm:hidden">
            <img
              src="/images/about_line.png"
              alt=""
              className="translate-x-[40px] sm:translate-x-0 "
            />
            <img
              src="/images/about_2.png"
              alt=""
              className="object-contain translate-y-[-40px] sm:translate-y-0 "
            />
          </div>

          <img
              src="/images/about_2.png"
              alt=""
              className="object-contain translate-y-[-40px] sm:translate-y-0 hidden sm:inline-block z-50  sm:scale-[.8] -translate-x-4 sm:translate-y-6  "
            />
        </div>

        <div className="flex  items-start ml-8 relative z-40 sm:ml-0 ">
          <img
            src="/images/about_3.png"
            alt=""
            className="object-contain mr-7 -translate-y-4 sm:translate-y-0  sm:scale-[.8]  sm:translate-x-4 sm:mr-4  "
          />
          <img src="/images/about_4.png" alt="" className="object-contain sm:translate-y-6  " />
          <img
            src="/images/OrnamentWhite.png"
            alt=""
            className="absolute -right-16 bottom-[-20%] -z-20 sm:-right-[150%]  sm:bottom-[-50%]   "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
