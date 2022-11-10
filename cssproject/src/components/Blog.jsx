import React from "react";

const Blog = () => {
  return (
    <div className="px-[150px] flex flex-col pb-[105px] ">
      <h2 className="font-bold text-white text-[48px] leading-[58px] mb-[40px] ">
        Blog from insights
      </h2>
      <div className="grid grid-cols-2 gap-8 ">
        <div className="flex flex-col col-span-1 ">
          <img
            src="/images/blog1.png"
            className="object-contain mb-[24px] "
            alt=""
          />
          <p className="w-max bg-white text-black rounded-3xl px-4 py-2 ">
            TECHNOLOGY
          </p>
          <p className="text-white my-4 ">John Doe • 19 Jan 2022</p>
          <p className="text-[30px] text-white font-bold  ">
            A small business is only as good as its tools and it is totally
            true.
          </p>
          <button className="flex w-max items-center border-white border px-4 py-2 rounded-3xl mt-6 ">
            <span className="text-white mr-3 font-semibold ">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
        <div className="flex flex-col col-span-1 ">
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
    </div>
  );
};

export default Blog;
