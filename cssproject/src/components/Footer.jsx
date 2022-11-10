import React from "react";

const Footer = () => {
  return (
    <section className="px-[80px] py-[50px] flex flex-col bg-[#3B435A] relative ">
      <div className="grid grid-cols-2">
        <div className="col-span-1 py-[80px] px-[53px]  bg-[#FFC93E] rounded-[30px] relative ">
          <h5 className="text-[#0A142F] text-[20px] leading-[30px]  font-semibold ">
            Sign Up to Receive Product Updates and More
          </h5>
          <p className="text-[#0A142F] flex justify-between py-[15px] border-b border-[#0A142F]  ">
            youremail@gmail.com
            <span className="font-bold"> > </span>
          </p>
          <img src="/images/dots.png" className="absolute top-[-8%] left-[-5%] "  alt="" />
        </div>
        <div className="col-span-1 py-[80px] px-[109px] flex rounded-[30px]">
          <div className="grid grid-cols-2 w-full gap-10 ">
            <div className="flex flex-col col-span-1">
              <h5 className="text-white font-semibold leading-[30px] mb-4 ">
                Office
              </h5>
              <p className="text-white mb-4 ">545, Street 11, Block F</p>
              <p className="text-white">California, U.S.A</p>
            </div>
            <div className="flex flex-col col-span-1 ">
              <h5 className="text-white font-semibold leading-[30px] mb-4 ">
                Contact
              </h5>
              <p className="text-white mb-4">+92 302 300 3215</p>
              <p className="text-white">ouradress@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[50px] ">
        <p className="text-[#E0E5F3]">2022. All Rights Reserved</p>
        <a href="#" className="text-[#E0E5F3]">
          Terms & Conditions Privacy
        </a>
        <div className="flex items-center">
          <a href="" className="mr-7">
            <img src="/images/logo-twitter.png" alt="" />
          </a>
          <a href="" className="mr-7">
            <img src="/images/logo-facebook.png" alt="" />
          </a>
          <a href="" className="mr-7">
            <img src="/images/logo-dribbble.png" alt="" />
          </a>
          <a href="">
            <img src="/images/logo-github.png" alt="" />
          </a>
        </div>
      </div>
      <img src="/images/footerlines.png" className="absolute top-[-15%] right-0"  alt="" />
    </section> 
  );
};

export default Footer;
