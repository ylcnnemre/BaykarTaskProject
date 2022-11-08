import React from "react";

const Header = () => {
  const links = [
    {
      name: "About Us",
      path: "",
    },
    {
      name: "What We Do",
      path: "",
    },
    {
      name: "Our work",
      path: "",
    },
    {
      name: "Blog",
      path: "",
    },
    {
      name: "Say hi",
      path: "",
    },
  ];
  return (
    <div className="flex justify-between items-center pt-[35px] pl-[150px] pr-[153px]  ">
      <img src="/images/logo.png" alt="" />
      <ul className="flex items-center">
        {links.map((item) => {
          return (
            <li
              key={item.name}
              className=" mr-[50px] text-white cursor-pointer"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <img src="/images/bars.svg" alt="" className="cursor-pointer" />
    </div>
  );
};

export default Header;
