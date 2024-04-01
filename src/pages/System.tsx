import React from "react";
import Footer from "../components/system/footer";
import Card from "../components/system/card";
import RightCard from "../components/system/rightCard";

const CardData = [
  {
    heading: <div className="font-semibold text-[16px]">Display</div>,
    title: <></>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <></>,
    title: <div>Machine stationary</div>,
    showSelectOne: true,
    showSelectTwo: false,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <></>,
    title: <div>Machine in motion</div>,
    showSelectOne: true,
    showSelectTwo: false,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <></>,
    title: <div>Brightness</div>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: true,
    showToggle: false,
    unit: <div>cd</div>,
    placeholder: '12.5'
  },
  {
    heading: <div className="font-semibold text-[16px]">Units</div>,
    title: <></>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <></>,
    title: <div>Units of measurement</div>,
    showSelectOne: false,
    showSelectTwo: true,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <div className="font-semibold text-[16px]">Wiper & washer</div>,
    title: <></>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: false,
  },
  {
    heading: <></>,
    title: <div>Wiper interval delay time</div>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: true,
    showToggle: false,
    unit: <div>s</div>,
    placeholder: '3'
  },
  {
    heading: <></>,
    title: <div>Front window joystick function</div>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: true,
  },
  {
    heading: <></>,
    title: <div>Rear window joystick function</div>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: true,
  },
  {
    heading: <></>,
    title: <div>Powerframe window joystick function</div>,
    showSelectOne: false,
    showSelectTwo: false,
    showInput: false,
    showToggle: true,
  },
];
const cardA = Array.from({ length: 10 }, (_, index) => index);

const System = () => {
  return (
    <div className="min-h-[100vh] App relative text-[white]  ">
      <div className="flex flex-col justify-between min-h-[100vh] pt-[10px]">
        <div>
          <div
            className="flex justify-between px-[10px]"
            style={{ width: `calc(100% - 258px)` }}
          >
            <div>System</div>
            <div>oo</div>
          </div>
          <div className="flex">
            <div className="p-[10px] " style={{ width: `calc(100% - 270px)` }}>
              <div className="flex flex-col gap-4">
                <div className="border-[2px] border-[#222222] rounded-[5px]">
                  {CardData.slice(0, 4).map((data, index) => (
                    <Card
                      key={index}
                      heading={data.heading}
                      title={data.title}
                      showSelectOne={data.showSelectOne}
                      showInput={data.showInput}
                      showToggle={data.showToggle}
                      unit={data.unit}
                      placeholder={data.placeholder}
                    />
                  ))}
                </div>
                <div className="border-[2px] border-[#222222] rounded-[5px]">
                  {CardData.slice(4, 6).map((data, index) => (
                    <Card
                      key={index}
                      heading={data.heading}
                      title={data.title}
                      showSelectOne={data.showSelectOne}
                      showSelectTwo={data.showSelectTwo}
                      showInput={data.showInput}
                      showToggle={data.showToggle}
                    />
                  ))}
                </div>
                <div className="border-[2px] border-[#222222] rounded-[5px]">
                  {CardData.slice(6).map((data, index) => (
                    <Card
                      key={index}
                      heading={data.heading}
                      title={data.title}
                      showSelectOne={data.showSelectOne}
                      showInput={data.showInput}
                      showToggle={data.showToggle}
                      unit={data.unit}
                      placeholder={data.placeholder}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex  w-[270px] flex-wrap h-fit p-[10px]">
              {cardA.slice(0, 8).map((_, index) => (
                <RightCard
                  key={index}
                  isIconOnly={true}
                  hideRightBorder={index === 9}
                />
              ))}{" "}
              <div className="mt-[20px] flex flex-wrap ">
                {cardA.slice(0, 4).map((_, index) => (
                  <RightCard
                    key={index}
                    isIconOnly={true}
                    hideRightBorder={index === 9}
                  />
                ))}{" "}
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="  relative w-full border-t-[1px] border-t-[grey] ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default System;
