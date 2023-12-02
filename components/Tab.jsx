"use client";

import { IoIosArrowRoundForward } from "react-icons/io";

const Tab = ({ tab, setActiveImage }) => {
  return (
    <div
      onMouseEnter={() => {
        setActiveImage(tab.img);
      }}
      className="max-w-[15rem] group h-[15vh] rounded-lg border-gray-300 border px-5 py-3 bg-gray-300/70 shadow-lg hover:bg-white transition-all cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        {tab.icon}
        <h1 className="text-xl font-semibold">{tab.title}</h1>
      </div>
      <p className="text-xs mt-6 group-hover:mt-2 transition-all font-medium tracking-wide">
        {tab.description}
      </p>
      <button
        className="group-hover:flex items-center text-xs hidden transition-all"
        style={{
          color: tab.color,
        }}
      >
        <p>Learn more</p>
        <IoIosArrowRoundForward className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Tab;
