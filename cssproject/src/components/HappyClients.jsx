import React from "react";

const HappyClients = () => {
  return (
    <section className="pl-[150px] flex flex-col overflow-hidden pb-[120px] ">
      <h2 className="text-[48px] leading-[48px] text-white mb-[46px] capitalize font-bold ">
        What say happy clients
      </h2>
      <div className="flex">
        <div className="bg-[#353F5B] pl-[64px] py-[53px] flex flex-col h-[440px] mr-8  rounded-[50px] relative  ">
          <img
            src="/images/quote.png"
            alt=""
            className="object-contain w-[62px] h-auto "
          />
          <p className="text-[#E0E5F3] leading-[30px] pr-[65px] my-[30px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper
            consequat in dolor mattis pellentesque suspendisse vulputate nec.
            Scelerisque elementum, consequat pharetra lectus eget vivamus ut.
            Magna aliquam tellus at volutpat cras aliquet facilisi quis
            adipiscing. Proin egestas et pellentesque augue pretium, amet.
            Natoque blandit augue integer maecenas mattis amet, nec.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex ">
              <img src="/images/brooklyn.png" alt="" />
              <div className="flex flex-col justify-center ml-4 ">
                <h5 className="text-white font-semibold ">Brooklyn Simmons</h5>
                <h5 className="text-[#FFC93E]">Pendron.Inc ,Ceo</h5>
              </div>
            </div>
            <div className="flex items-center mr-[80px]">
              {[...Array(5).keys()].map((el) => (
                <img
                  src="/images/bi_star.png"
                  className="object-contain mr-2 "
                />
              ))}
            </div>
          </div>
          <img src="/images/carosel.png" className="absolute top-1/2 left-[-4%] cursor-pointer "  alt="" />
        </div>
        <div className="bg-[#353F5B]   pl-[64px] py-[53px] flex flex-col  rounded-[50px] h-[440px] translate-x-[15%]  ">
          <img
            src="/images/quote.png"
            alt=""
            className="object-contain w-[62px] h-auto "
          />
          <p className="text-[#E0E5F3] leading-[30px] pr-[65px] my-[30px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper
            consequat in dolor mattis pellentesque suspendisse vulputate nec.
            Scelerisque elementum, consequat pharetra lectus eget vivamus ut.
            Magna aliquam tellus at volutpat cras aliquet facilisi quis
            adipiscing. Proin egestas et pellentesque augue pretium, amet.
            Natoque blandit augue integer maecenas mattis amet, nec.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex ">
              <img src="/images/jenny.png" alt="" />
              <div className="flex flex-col justify-center ml-4 ">
                <h5 className="text-white font-semibold ">Jenny Wilson</h5>
                <h5 className="text-[#FFC93E]">Bettero.Inc ,Ceo</h5>
              </div>
            </div>
            <div className="flex items-center mr-[80px]">
              {[...Array(5).keys()].map((el) => (
                <img
                  src="/images/bi_star.png"
                  className="object-contain mr-2 "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
