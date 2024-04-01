import React from "react";

interface CardProps {
  heading: JSX.Element;
  title: JSX.Element;
  showSelectOne?: boolean;
  showSelectTwo?: boolean;
  showInput?: boolean;
  showToggle?: boolean;
  unit?: JSX.Element;
  placeholder?: string

}

const Card: React.FC<CardProps> = ({
  heading,
  title,
  showSelectOne = false,
  showSelectTwo = false,
  showInput = false,
  showToggle = false,
  placeholder = '0',
  unit,
}) => {
  return (
    <div className="w-full  bg-[#3C3C3C] min-h-[54px] px-[10px] h-full flex-col justify-between flex">
      <div></div>
      <div className="flex justify-between items-center h-full w-[90%]">
        {heading} {title}
        <div>
          {showSelectOne && (
            <select className="h-[34px] px-[5px] text-[10px] w-[136px] border-[2px] border-[#222222] bg-[#444444] focus:outline-none focus:shadow-outline">
              <option>Normal Contrast</option>
              <option>Selection B</option>
              <option>Selection C</option>
              <option>Selection D</option>
            </select>
          )}
          {showSelectTwo && (
            <select className="h-[34px] px-[5px] text-[10px] w-[136px] border-[2px] border-[#222222] bg-[#444444] focus:outline-none focus:shadow-outline">
              <option>Metric (SI)</option>
              <option>Selection B</option>
              <option>Selection C</option>
              <option>Selection D</option>
            </select>
          )}
          {showInput && (
            <div className="flex w-[58px]">
              <input
                type="number"
                placeholder={placeholder}
                className="bg-white border-[2px] border-[#222222] placeholder:text-black flex justify-end text-right text-black font-bold appearance-none  focus:outline-none w-[61px] h-[38px] pr-[5px]"
              />
              <div className="relative left-[25px] top-[5px]" >{unit}</div>
            </div>
          )}
          {showToggle && (
            <label className="switch">
              <input type="checkbox" />
            </label>
          )}
        </div>
      </div>
      <div className="flex w-full bg-[#5A5A5A] h-[1px] "></div>
    </div>
  );
};

export default Card;
