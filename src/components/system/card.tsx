import React from "react";

interface CardProps {
  heading: JSX.Element;
  title: JSX.Element;
  showSelect?: boolean;
  showInput?: boolean;
  showToggle?: boolean;
}


const Card: React.FC<CardProps> = ({
    heading,
    title,
    showSelect = false,
    showInput = false,
    showToggle = false,
  }) => {
    return (
      <div className="w-full  bg-[#3C3C3C] min-h-[54px] px-[10px] h-full flex-col justify-between flex">
        <div></div>
        <div className="flex justify-between items-center h-full w-[90%]">
          {heading} {title}
          <div></div>
          <div>
            {showSelect && (
              <select className="h-[34px] px-[5px] font-bold text-[15px] w-[136px] border-[2px] border-[#222222] bg-[#444444] focus:outline-none focus:shadow-outline">
                <option>Selection A</option>
                <option>Selection B</option>
                <option>Selection C</option>
                <option>Selection D</option>

              </select>
            )}
            {showInput && (
              <input
                type="number"
                placeholder="0"
                className="bg-white border-[2px] border-[#222222] placeholder:text-black flex justify-end text-right text-black font-bold appearance-none  focus:outline-none w-[61px] h-[38px] pr-[5px]"
              />
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