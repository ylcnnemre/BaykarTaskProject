import React from "react";

const OurProjects = () => {
  const links = ["All", "UI/UX", "Web Design", "Branding", "Interaction"];

  return (
    <div className="flex flex-col">
      <h1 className="text-[#FFFFFF] text-[48px] text-center capitalize leading-[58px] font-bold ">
        Our latest Projects
      </h1>
      <ul className="flex justify-center mt-6 ">
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
      <div className="px-[150px] pt-12  pb-[120px]  flex flex-col ">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="flex flex-col items-start  ">
            <img
              src="/images/ourprojects_1.png"
              className="w-full"
              alt=""
            />
            <h4 className="font-bold text-[24px] text-white  leading-[36px]  my-[32px] ">
              Talent.com - Logo, Full Redesign <br /> and Branding
            </h4>
            <p className="text-[#E0E5F3] leading-[30px]  ">
              Talent.com a new brand identity using their core values of
              optimism, transparency and approachability as inspiration. As a
              result, we were able to create the most streamlined
            </p>
          </div>
          <div className="flex flex-col items-start  ">
            <img
              src="/images/ourprojects_2.png"
              className="w-full"
              alt=""
            />
            <h4 className="font-bold text-[24px] text-white leading-[36px] my-[26px] ">
              Bonfire - Landing Page Design <br /> Webby Awards Nomination
            </h4>
            <p className="text-[#E0E5F3] leading-[30px] ">
              Talent.com a new brand identity using their core values of
              optimism, transparency and approachability as inspiration. As a
              result, we were able to create the most streamlined
            </p>
          </div>
        </div>
        <button className="bg-[#FFC93E] w-max flex items-center self-center px-12 py-4 rounded-[30px] mt-[48px] ">
            <span className="mr-[10px] font-semibold "  >
              Load More
            </span>
            <img src="/images/arrow_up.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
