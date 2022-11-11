import React from "react";
import StarGrid from "./StarGrid";

const HeroSection = () => {
  return (
    <section className="flex mt-[70px]  flex-col sm:px-[20px] ">
      <div className="flex flex-col flex-1  ">
        <div className="flex  ">
          <StarGrid  />
          <div className="flex ml-[160px] items-center justify-center sm:ml-0  ">
            <img src="/images/world_class.png" alt="" className="sm:w-[120px] h-auto  sm:translate-x-[-10px] sm:translate-y-[10px]  " />
            <h1 className="text-[150px] text-[#FFFFFF] font-bold leading-[180px] sm:text-[80px] sm:leading-[70px] sm:-translate-x-6 ">
              Digital
            </h1>
            <img
              src="/images/linevector.png"
              className="absolute right-[34px] top-[157px] sm:hidden  "
              alt=""
            />
            <img src="/images/vector_1.png" className="sm:inline-block hidden absolute right-[20px] top-[152px] "   alt="" />
          </div>
          <div className=" flex flex-1 flex items-start justify-center">
            <img src="/images/star.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center sm:justify-start ">
          <h1 className="text-[150px] text-[#FFFFFF] leading-[180px] font-bold text-white -translate-x-[65px]  -translate-y-[40px]  sm:text-[70px] sm:translate-x-0 sm:leading-[70px] sm:translate-y-2   ">
            Agency
          </h1>
        </div>
      </div>
      <div className="flex pr-[70px] sm:flex-col sm:pr-0 ">
        <div
          className="relative  h-max  min-w-[240px] z-40  ml-[30px] mr-[164px] translate-y-[120px]  sm:order-3  sm:translate-y-0 sm:ml-0 sm:mr-0 w-max " /* className="min-h-[307px]  min-w-[240px] ml-[30px] mr-[164px] relative max-h-[307px] z-30 flex items-center " */
        >
          <img src="/images/hero_image1.png" alt="" className="z-50" />
          <img
            src="/images/OrnamentWhite.png"
            alt=""
            className=" absolute right-[-60px] bottom-[-40px] -z-40  "
          />
        </div>

        <div className="flex flex-col  items-start  sm:order-1 sm:my-6 ">
          <h3 className="text-[#E0E5F3] leading-[40px] font-normal text-2xl sm:text-[18px]  ">
            Full-service design support that growing B2B companies need. World
            leading agency.
          </h3>
          <button className="flex items-center justify-center  pl-8 pr-6 rounded-[30px] bg-[#FFC93E] py-[16px]   mt-[44px]  sm:mt-6 ">
            <span className="text-[18px] font-medium leading-[22px] ">
              Our Projects
            </span>
            <img src="/images/arrow.png" className="ml-[10px]" alt="" />
          </button>
          <div
            className="flex flex-col mt-[26px] self-end mr-[176px]  cursor-pointer sm:hidden"
          >
            <p
              style={{ writingMode: "vertical-lr" }}
              className="rotate-[-180deg] text-[#F3F5F6 text-white  "
            >
              Scroll Down
            </p>
            <img
              src="/images/arrow_down.png"
              className="mt-3 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div className="min-w-[466px] min-h-[475px] z-500 relative -translate-y-[33%] sm:order-2 sm:translate-y-0  sm:min-w-full sm:pr-3 sm:mt-6   ">
          <img
            src="/images/hero_image2.png"
            alt=""
            className=" z-50 sm:object-contain w-full   "
          />
          <img src="/images/playvideo.png" alt="" className="absolute bottom-[-15%] left-1/2  sm:bottom-[10%] "  />
        </div>
      </div>
  
    </section>
  );
};

export default HeroSection;
