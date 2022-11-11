import React from "react";
import StarGrid from "./StarGrid";

const HeroSection = () => {
  return (
    <section className="flex mt-[70px]  flex-col ">
      <div className="flex flex-col flex-1  ">
        <div className="flex  ">
          <StarGrid />
          <div className="flex ml-[160px] items-center justify-center">
            <img src="/images/world_class.png" alt="" />
            <h1 className="text-[150px] text-[#FFFFFF] font-bold leading-[180px]  ">
              Digital
            </h1>
            <img
              src="/images/linevector.png"
              className="absolute right-[34px] top-[157px]  "
              alt=""
            />
          </div>
          <div className=" flex flex-1 flex items-start justify-center">
            <img src="/images/star.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-[150px] text-[#FFFFFF] leading-[180px] font-bold text-white -translate-x-[65px]  -translate-y-[40px] ">
            Agency
          </h1>
        </div>
      </div>
      <div className="flex pr-[70px] ">
        <div
          className="relative  h-max  min-w-[240px] z-40  ml-[30px] mr-[164px] translate-y-[120px]  " /* className="min-h-[307px]  min-w-[240px] ml-[30px] mr-[164px] relative max-h-[307px] z-30 flex items-center " */
        >
          <img src="/images/hero_image1.png" alt="" className="z-50" />
          <img
            src="/images/OrnamentWhite.png"
            alt=""
            className=" absolute right-[-60px] bottom-[-40px] -z-40  "
          />
        </div>

        <div className="flex flex-col  items-start ">
          <h3 className="text-[#E0E5F3] leading-[40px] font-normal text-2xl ">
            Full-service design support that growing B2B companies need. World
            leading agency.
          </h3>
          <button className="flex items-center justify-center  pl-8 pr-6 rounded-[30px] bg-[#FFC93E] py-[16px]   mt-[44px] ">
            <span className="text-[18px] font-medium leading-[22px] ">
              Our Projects
            </span>
            <img src="/images/arrow.png" className="ml-[10px]" alt="" />
          </button>
          <div
            className="flex flex-col mt-[26px] self-end mr-[176px]  cursor-pointer"
          >
            <p
              style={{ writingMode: "vertical-lr" }}
              className="rotate-[-180deg] text-[#F3F5F6]"
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

        <div className="min-w-[466px] min-h-[475px] z-500 relative -translate-y-[33%] ">
          <img
            src="/images/hero_image2.png"
            alt=""
            className=" z-50  "
          />
          <img src="/images/playvideo.png" alt="" className="absolute bottom-[-15%] left-1/2 " />
        </div>
      </div>
      {/*   <div className="flex pl-[36px] pr-[70px]">

          <img
            src="/images/hero_image1.png"
            alt=""
            className=" w-[241px]  h-[307px]"
          />
  
        <div className="flex flex-col ml-[200px] items-start ">
          <h3 className="text-[#E0E5F3] leading-[40px] font-normal text-2xl ">
            Full-service design support that growing B2B companies need. World
            leading agency.
          </h3>
          <button className="flex items-center justify-center  pl-8 pr-6 rounded-[30px] bg-[#FFC93E] py-[16px] bg-red-300  mt-[44px] ">
            <span className="text-[18px] font-medium leading-[22px] ">
              Our Projects
            </span>
            <img src="/images/arrow.png" className="ml-[10px]" alt="" />
          </button>
          <div
            className="flex flex-col mt-[26px] self-end mr-[176px]  cursor-pointer"
            onClick={() => console.log("asdads")}
          >
            <p
              style={{ writingMode: "vertical-lr" }}
              className="rotate-[-180deg] text-[#F3F5F6]"
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
        <div className="z-30">
          <img
            src="/images/hero_image2.png"
            alt=""
            className="z-50 object-contain"
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
