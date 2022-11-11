import React from "react";

const Categories = () => {
  const categorieList = [
    {
      img: "/images/categorie_1.png",
      title: "Games",
    },
    {
      img: "/images/categorie_2.png",
      title: "Sport",
    },
    {
      img: "/images/categorie_3.png",
      title: "Metaverse",
    },
    {
      img: "/images/categorie_4.png",
      title: "Art",
    },
    {
      img: "/images/categorie_1.png",
      title: "Games",
    },
    {
      img: "/images/categorie_2.png",
      title: "Sport",
    },
    {
      img: "/images/categorie_3.png",
      title: "Metaverse",
    },
    {
      img: "/images/categorie_4.png",
      title: "Art",
    },
  ];

  return (
    <section className="flex flex-col px-[170px] pb-[100px] sm:hidden ">
      <h1 className="text-5xl font-bold mb-[60px]  text-white leading-[58px]">
        Categories
      </h1>
      <div className="grid grid-cols-4 gap-8 ">
        {categorieList.map((el, index) => {
          return (
            <div className="col-span-1  flex flex-col p-[10px] bg-[#3A425A] justify-center rounded-[50px] relative  ">
              <img src={el.img} alt="" />
              <h4 className="text-white text-center font-bold my-[50px] text-[24px] ">
                {el.title}
              </h4>

              {index === 0 || index === 4 ? (
                <div className="flex justify-center items-center p-3 absolute left-[-10%] top-1/2 bg-[#3A425A] rounded-full -translate-y-1/2 ">
                  <img src="/images/arrow_right.png" alt="" />
                </div>
              ) : null}
              {index === 3 || index === 7 ? (
                <div className="flex justify-center items-center p-3 absolute right-[-10%] top-1/2 bg-[#3A425A] rounded-full -translate-y-1/2 ">
                  <img src="/images/arrow_right.png" className="rotate-180  "  alt="" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
