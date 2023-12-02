"use client";

import list from "../public/images/list.webp";
import table from "../public/images/table.png";
import timeline from "../public/images/timeline.png";
import calendar from "../public/images/calendar.png";
import board from "../public/images/board.png";
import gallery from "../public/images/gallery.png";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "Board",
    img: board,
  },
  {
    title: "Table",
    img: table,
  },
  {
    title: "Timeline",
    img: timeline,
  },
  {
    title: "Calendar",
    img: calendar,
  },
  {
    title: "Gallery",
    img: gallery,
  },
  {
    title: "List",
    img: list,
  },
];

const Features = () => {
  const [active, setActive] = useState(items[0]);
  return (
    <div className="flex flex-col items-center">
      <Image
        key={gallery}
        src={active.img}
        alt=""
        className="rounded-lg border-2 border-gray-300 max-w-[60vw]"
      />
      <div className="flex gap-2 mt-5">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              onClick={() => {
                setActive(item);
              }}
              className="border rounded-md px-2 text-sm border-gray-400 cursor-pointer hover:bg-gray-400/80 transition-all"
              style={{
                backgroundColor: active.title === item.title ? "#e8e7e6" : "",
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
