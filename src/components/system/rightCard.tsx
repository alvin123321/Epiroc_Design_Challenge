import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
interface CardProps {
  isIconOnly: boolean;
  hideRightBorder: boolean;
}
const RightCard: React.FC<CardProps> = ({ isIconOnly, hideRightBorder }) => {
  const [active, setActive] = useState(true);
  const toggleActive = () => setActive((prev) => !prev);
  return (
    <button
      onClick={toggleActive}
      className={`w-[59.5px] h-[55px] flex justify-center items-center bg-[#1A1A1A] ${
        hideRightBorder ? "" : "border-[2px] border-[#222222]"
      }`}
    >
      {isIconOnly && active && <FaBeer color="white" size={21} />}
      {isIconOnly && !active && <FaBeer color="#2baaff" size={21} />}
    </button>
  );
};

export default RightCard;
