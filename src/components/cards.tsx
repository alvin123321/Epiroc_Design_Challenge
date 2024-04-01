import React from "react";

interface CardsProps {
  img: string;
  title: string;
}

const Cards: React.FC<CardsProps> = ({ img, title }) => {
  return (
    <div className="bg-[#444444] h-[168px] w-[198px] flex justify-between flex-col items-center bxs rounded-[18px] pb-[10px] pt-[35px]">
      <div className="h-[80px] w-[80px]">
        <img src={img} alt={title} />
      </div>
      <div className="text-white font-[600]">{title}</div>
    </div>
  );
};

export default Cards;