import React from "react";
import { FaBeer } from "react-icons/fa";
interface CardProps {
  isIconOnly: boolean;
  hideRightBorder: boolean;
}
const RightCard: React.FC<CardProps> = ({ isIconOnly, hideRightBorder }) => {
  return (
    <button
      className={`w-[59.5px] h-[55px] flex justify-center items-center bg-[#1A1A1A] ${
        hideRightBorder ? "" : "border-[2px] border-[#222222]"
      }`}
    >
      {isIconOnly && <FaBeer color="#00DC23" size={21} />}
    </button>
  );
};

export default RightCard;