import React from "react";

const OurProjects = () => {
  const links = ["All", "UI/UX", "Web Design", "Branding", "Interaction"];

  return (
    <div className="flex flex-col sm:px-6 ">
      <h1 className="text-[#FFFFFF] text-[48px] text-center capitalize leading-[58px] font-bold sm:text-[24px] sm:flex sm:justify-between sm:items-center ">
        Our latest Projects
        <span className="hidden sm:inline-block text-base  text-[#FFC93E] ">
          See All
        </span>
      </h1>
      <ul className="flex justify-center mt-6 sm:hidden ">
        {links.map((el, index) => {
          return (
            <li
              key={String(index)}
              className={[
                `${index === links.length - 1 || "mr-10"}   ${
                  index === 1 ? "text-[#FFC93E]" : "text-white"
                } `,
              ]}
            >
              {el}
            </li>
          );
        })}
      </ul>
      <ul className="hidden sm:flex justify-between ">
        <li className="text-white">All</li>
        <li className="text-[#FFC93E]">UI/UX</li>
        <li className="text-white">Web Design</li>
        <li className="text-white">Branding</li>
      </ul>

      <div className="px-[150px] pt-12  pb-[120px]  flex flex-col sm:px-0 ">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="flex flex-col items-start sm:col-span-2 ">
            <img src="/images/ourprojects_1.png" className="w-full" alt="" />
            <h4 className="font-bold text-[24px] text-white  leading-[36px]  my-[32px] sm:hidden  ">
              Talent.com - Logo, Full Redesign <br /> and Branding
            </h4>
            <p className="text-[#E0E5F3] leading-[30px] sm:hidden  ">
              Talent.com a new brand identity using their core values of
              optimism, transparency and approachability as inspiration. As a
              result, we were able to create the most streamlined
            </p>
          </div>
          <div className="flex flex-col items-start sm:hidden  ">
            <img src="/images/ourprojects_2.png" className="w-full" alt="" />
            <h4 className="font-bold text-[24px] text-white leading-[36px] my-[26px] ">
              Bonfire - Landing Page Design <br /> Webby Awards Nomination
            </h4>
            <p className="text-[#E0E5F3] leading-[30px] ">
              Talent.com a new brand identity using their core values of
              optimism, transparency and approachability as inspiration. As a
              result, we were able to create the most streamlined
            </p>
          </div>
          <div className="hidden sm:flex flex justify-center items-center my-[20px] col-span-2  ">
            <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block mr-5 "></span>
            <span className="w-[20px] h-[20px] rounded-3xl bg-[#FFC93E]  sm:inline-block mr-5 "></span>
            <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block  "></span>
          </div>
        </div>
        <button className="bg-[#FFC93E] w-max flex items-center self-center px-12 py-4 rounded-[30px] mt-[48px] sm:hidden ">
          <span className="mr-[10px] font-semibold ">Load More</span>
          <img src="/images/arrow_up.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
