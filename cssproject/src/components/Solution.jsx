import React from "react";

const Solution = () => {
  const solutionData = [
    {
      title: "Data Analysis with problem factor",
      desc: "Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.",
    },
    {
      title: "Functionality solution for users",
      desc: "Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies.",
    },
    {
      title: "Latest technology enabled",
      desc: "Technology the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.",
    },
  ];

  return (
    <div className="grid grid-cols-5  z-50  ">
      <div className="bg-[#FFC93E] pt-[100px] pb-[80px] col-span-2 -z-10 ">
        <div className="relative translate-x-[120px] ">
          <img src="/images/solution_1.png" className="z-40 " alt="" />
          <img
            src="/images/OrnamentWhite.png"
            className="absolute -top-10 -z-30  -right-10  "
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#353F5B] col-span-3 pl-[200px]  pr-[110px] -z-40 py-[100px]  ">
        <h1 className="text-5xl font-bold leading-[58.09px] text-[#FFFFFF] ">
          Our Solution Approach
        </h1>
        {solutionData.map((item) => {
          return (
            <div className="flex mt-[60px]">
              <img
                src="/images/check.png"
                alt=""
                className="object-contain self-start "
              />
              <div className="flex flex-col ml-[22px] ">
                <h3 className="font-bold text-2xl text-white ">
                  {item.title}
                </h3>
                <p className="text-[#E0E5F3] leading-[30px] mt-[18px] ">
                  {
                    item.desc
                  }
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solution;
