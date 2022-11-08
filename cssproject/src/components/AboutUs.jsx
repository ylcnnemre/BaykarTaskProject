import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-[60px] px-[150px] flex  ">
      <div className="flex flex-col   w-[46%] ">
        <h2 className="text-[48px] text-[#FFFFFF] font-bold leading-[58px] pl-3 ">
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
      </div>
      <div className="flex justify-start items-start  w-[54%] ml-[46px] ">
            <img src="/images/about_1.png" alt="" className="object-contain" />
            <img src="/images/about_2.png" alt="" className="object-contain" />
      </div>
    </div>
  );
};

export default AboutUs;
