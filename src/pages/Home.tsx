import React from "react";
import Cards from "../components/cards";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    title: "Operations",
    img: "PiAirplane",
  },
  {
    title: "Cable reel and Camera",
    img: "PiAirplay",
  },
  {
    title: "Operator",
    img: "PiAppStoreLogo",
  },
  {
    title: "System",
    img: "PiAtom",
  },
  {
    title: "Data & Logs",
    img: "PiBatteryHighBold",
  },
  {
    title: "Settings",
    img: "PiCalculatorLight",
  },
];
interface CardData {
  title: string;
  img: string;
}
const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="App ">
      <div className="flex justify-center min-h-[100vh] flex-col items-center py-[40px]">
        <div onClick={()=>navigate("/system")} className="flex max-w-[800px]  justify-center flex-wrap flex-row gap-[50px]">
          {cardsData.map((card: CardData, index: number) => (
            <Cards key={index} title={card.title} img={card.img} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
