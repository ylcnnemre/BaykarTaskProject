import React from "react";

const FanFact = () => {
  const factData = [
    {
      data: "4.8K",
      desc: "Job Completed",
    },
    {
      data: "12+",
      desc: "Industry Experience",
    },
    {
      data: "2.5k+",
      desc: "World wide clients",
    },
    {
      data: "120+",
      desc: "Won Awards",
    },
  ];

  return (
    <section className="py-32 px-[237px] flex  ">
      {factData.map((el, index) => {
        return (
          <div key={index} className={[`flex flex-col items-center ${index == factData.length-1 ? "0" : "mr-[113px]"  } `]}>
            <h3 className="text-[48px] font-bold leading-[58px] text-[#FFFFFF]  ">{el.data}</h3>
            <p  className="text-[#E0E5F3] text-[20px] " >{el.desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default FanFact;
