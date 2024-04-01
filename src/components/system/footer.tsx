import React from "react";
import { AiFillDashboard } from "react-icons/ai";

interface CardProps {
  isIconOnly: boolean;
  hideRightBorder: boolean;
}

const Footer: React.FC = () => {
  // Array of 10 elements
  const cardArray = Array.from({ length: 10 }, (v, index) => index);

  return (
    <div className="flex p-[20px] pt-[10px] gap-[20px] flex-col md:flex-row items-center justify-center w-full">
      <div className="border-[3px] border-[black] rounded-[5px] flex flex-wrap gap-1 justify-center p-1 ">
        {cardArray.map((_, index) => (
          <Card
            key={index}
            isIconOnly={index < 3}
            hideRightBorder={index === 9}
          />
        ))}{" "}
      </div>
      <div className="  min-w-[100px] h-[60px] flex justify-center">
        <img
          className="w-[60px] h-[58px] object-contain border-[3px] border-[black] rounded-[5px]"
          src={require("../../images/footercenter.png")}
          alt=""
        />
      </div>
      <div className="border-[3px] border-[black] rounded-[5px] flex flex-wrap gap-1 justify-center p-1 ">
        {cardArray.map((_, index) => (
          <Card
            key={index}
            isIconOnly={index > 7}
            hideRightBorder={index === 9}
          />
        ))}{" "}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ isIconOnly, hideRightBorder }) => {
  return (
    <button
      className={`w-[57px] h-[60px] flex justify-center items-center bg-[#1A1A1A] ${
        hideRightBorder ? "" : "border-r-[2px] border-r-[#464646]"
      } ${isIconOnly ? "" : "cursor-default"}`}
    >
      {isIconOnly && <AiFillDashboard color="#00DC23" size={21} />}
    </button>
  );
};

export default Footer;
