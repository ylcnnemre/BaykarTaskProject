import React from "react";

const Blog = () => {
  return (
    <div className="px-[150px] flex flex-col pb-[105px] sm:px-[20px] ">
      <h2 className="font-bold text-white text-[48px] leading-[58px] mb-[40px] sm:text-[24px] sm:flex sm:justify-between sm:items-center  ">
        Blog from insights
        <span className="text-base text-[#FFC93E] hidden sm:inline-block ">
          See All
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-8 ">
        <div className="flex flex-col sm:col-span-2 ">
          <img
            src="/images/blog1.png"
            className="object-contain mb-[24px] "
            alt=""
          />
          <p className="w-max bg-white text-black rounded-3xl px-4 py-2 text-center sm:self-center ">
            TECHNOLOGY
          </p>
          <p className="text-white my-4 sm:self-center ">
            John Doe • 19 Jan 2022
          </p>
          <p className="text-[30px] text-white font-bold sm:text-center  sm:text-[20px] sm:px-6 ">
            A small business is only as good as its tools and it is totally
            true.
          </p>
          <button className="flex w-max items-center border-white border px-4 py-2 rounded-3xl mt-6 self-center ">
            <span className="text-white mr-3 font-semibold ">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
        <div className="flex flex-col col-span-1 sm:hidden ">
          <img
            src="/images/blog2.png"
            className="object-contain mb-[24px] "
            alt=""
          />
          <p className="w-max bg-white text-black rounded-3xl px-4 py-2 ">
            WEBİNER
          </p>
          <p className="text-white my-4 ">John Doe • 19 Jan 2022</p>
          <p className="text-[30px] text-white font-bold  ">
            Colaboration with team members that will be grow to business.
          </p>
          <button className="flex w-max items-center border-white border px-4 py-2 rounded-3xl mt-6 ">
            <span className="text-white mr-3 font-semibold ">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
   
      </div>
      <div className="hidden sm:flex flex justify-center items-center my-[40px] self-center w-full  ">
          <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block mr-5 "></span>
          <span className="w-[20px] h-[20px] rounded-3xl bg-[#FFC93E]  sm:inline-block mr-5 "></span>
          <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block  "></span>
        </div>
    </div>
  );
};

export default Blog;
