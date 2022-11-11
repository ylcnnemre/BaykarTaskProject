import React from "react";

const OurServices = () => {
  return (
    <section className="px-[150px] pt-[120px] sm:px-5 sm:flex sm:flex-col ">
      <div className="flex justify-between items-center ">
        <h1 className="text-[48px] text-white capitalize font-bold leading-[58px] sm:text-2xl sm:leading-[29.05px] ">
          Service we can <br />
          help you
        </h1>
        <button className="bg-transparent text-white h-max py-2 px-6 rounded-3xl  border-white border-2 flex items-center sm:border-none  sm:px-0">
          <span className="mr-2 sm:text-[#FFC93E] ">See All</span>
          <img src="/images/arrow_up.png" className="sm:hidden " alt="" />
        </button>
      </div>
      <div className="grid grid-cols-2 mt-[40px] gap-8 pb-[120px] sm:pb-0 ">
        <div className="pl-8 pr-10 flex flex-col bg-[#353F5B] py-[80px] rounded-tl-[50px] sm:pr-0 sm:col-span-2 sm:py-8 sm:rounded-[30px]  ">
          <img
            src="/images/pencil.png"
            className="object-contain w-[64px] h-auto "
            alt=""
          />
          <h5 className="font-semibold text-[30px] text-white lead my-[15px] ">
            Content Writing
          </h5>
          <p className="text-[#E0E5F3] leading-[30px] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat
            nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum
            luctus viverra. Eu pellentesque sem sed platea diam dignissim duis
            purus.
          </p>
          <button className="flex items-center w-max py-3 px-6 border-2 border-white rounded-[30px] mt-[40px] ">
            <span className="text-white mr-3">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
        <div className="pl-8 pr-10 flex flex-col bg-[#353F5B] py-[80px] rounded-tr-[50px]  translate-y-10 sm:hidden ">
          <img
            src="/images/paper.png"
            className="object-contain w-[64px] h-auto "
            alt=""
          />
          <h5 className="font-semibold text-[30px] text-white lead my-[15px] ">
            UX Research
          </h5>
          <p className="text-[#E0E5F3] leading-[30px] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat
            nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum
            luctus viverra. Eu pellentesque sem sed platea diam dignissim duis
            purus.
          </p>
          <button className="flex items-center w-max py-3 px-6  rounded-[30px] mt-[40px] bg-[#FFC93E] ">
            <span className="text-black mr-3">Read More</span>
            <img src="/images/arrow_up.svg" className="" alt="" />
          </button>
        </div>
        <div className="pl-8 pr-10 flex flex-col bg-[#353F5B] py-[80px] rounded-bl-[50px] sm:hidden ">
          <img
            src="/images/clarity_ruler.png"
            className="object-contain w-[64px] h-auto "
            alt=""
          />
          <h5 className="font-semibold text-[30px] text-white lead my-[15px] ">
            Branding
          </h5>
          <p className="text-[#E0E5F3] leading-[30px] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat
            nunc id purus pretium sagittis diam quis massa. Nulla ridiculus
            nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam
            dignissim duis purus.
          </p>
          <button className="flex items-center w-max py-3 px-6 border-2 border-white rounded-[30px] mt-[40px] ">
            <span className="text-white mr-3">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
        <div className="pl-8 pr-10 flex flex-col bg-[#353F5B] py-[80px] rounded-br-[50px] sm:hidden translate-y-10 ">
          <img
            src="/images/desktop.png"
            className="object-contain w-[64px] h-auto "
            alt=""
          />
          <h5 className="font-semibold text-[30px] text-white lead my-[15px] ">
            Web Design
          </h5>
          <p className="text-[#E0E5F3] leading-[30px] text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat
            nunc id purus pretium sagittis diam quis massa. Nulla ridiculus
            nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam
            dignissim duis purus.
          </p>
          <button className="flex items-center w-max py-3 px-6 border-2 border-white rounded-[30px] mt-[40px] ">
            <span className="text-white mr-3">Read More</span>
            <img src="/images/arrow_up.png" alt="" />
          </button>
        </div>
      </div>
      <div className="hidden sm:flex flex justify-center items-center my-[40px] ">
         <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block mr-5 " >
         </span>
         <span className="w-[20px] h-[20px] rounded-3xl bg-[#FFC93E]  sm:inline-block mr-5 " >
         </span>
         <span className="w-[20px] h-[20px] rounded-3xl bg-white border sm:inline-block  " >
         </span>
      </div>
    </section>
  );
};

export default OurServices;
