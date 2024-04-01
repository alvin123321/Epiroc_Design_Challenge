import React from "react";
import { PiAirplane, PiAirplay, PiAppStoreLogo, PiAtom, PiBatteryHighBold, PiCalculatorLight    } from "react-icons/pi";

interface CardsProps {
  img: string;
  title: string;
}

const Cards: React.FC<CardsProps> = ({ img, title }) => {
  let icon;
  switch (img) {
    case "PiAirplane":
      icon = <PiAirplane color="white" size={90} />;
      break;

    case "PiAirplay":
      icon = <PiAirplay color="white" size={90} />;
      break;
    case "PiAppStoreLogo":
      icon = <PiAppStoreLogo color="white" size={90} />;
      break;
    case "PiAtom":
      icon = <PiAtom color="white" size={90} />;
      break;
    case "PiBatteryHighBold":
      icon = <PiBatteryHighBold color="white" size={90} />;
      break;
    case "PiCalculatorLight":
      icon = <PiCalculatorLight color="white" size={90} />;
      break;
  }

  return (
    <button className="bg-[#444444] h-[168px] w-[198px] flex justify-between flex-col items-center bxs rounded-[18px] pb-[10px] pt-[30px]">
      <div className="h-[80px] w-[80px]">{icon}</div>
      <div className="text-white font-[600]">{title}</div>
    </button>
  );
};

export default Cards;
