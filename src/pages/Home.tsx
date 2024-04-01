import React from "react";
import Cards from "../components/cards";
const cardsData = [
  {
    title: "Operations",
    img: "https://via.placeholder.com/80x80?text=Operations",
  },
  {
    title: "Cable reel and Camera",
    img: "https://via.placeholder.com/80x80?text=Cable+reel+and+Camera",
  },
  {
    title: "Operator",
    img: "https://via.placeholder.com/80x80?text=Operator",
  },
  {
    title: "System",
    img: "https://via.placeholder.com/80x80?text=System",
  },
  {
    title: "Data & Logs",
    img: "https://via.placeholder.com/80x80?text=Data+%26+Logs",
  },
  {
    title: "Settings",
    img: "https://via.placeholder.com/80x80?text=Settings",
  },
];
interface CardData {
  title: string;
  img: string;
}
const Home = () => {
  return (
    <div className="App ">
      <div className="flex justify-center min-h-[100vh] flex-col items-center py-[40px]">
        <div className="flex max-w-[800px]  justify-center flex-wrap flex-row gap-[50px]">
          {cardsData.map((card: CardData, index: number) => (
            <Cards key={index} title={card.title} img={card.img} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
