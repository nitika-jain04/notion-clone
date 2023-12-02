"use client";

import Image from "next/image";
import { FaTools } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { PiMegaphoneSimpleFill } from "react-icons/pi";
import { SlCompass } from "react-icons/sl";
import { FaPuzzlePiece } from "react-icons/fa6";
import wiki from "../public/images/wiki.png";
import design from "../public/images/design.png";
import product from "../public/images/product.png";
import marketing from "../public/images/marketing.png";
import operations from "../public/images/operations.png";
import hr from "../public/images/hr.png";
import { useState } from "react";

const items = [
  {
    title: "Engineering",
    icon: <FaTools className="h-16 w-16" />,
    img: wiki,
  },
  {
    title: "Design",
    icon: <IoIosColorPalette className="h-16 w-16" />,
    img: design,
  },
  {
    title: "Product",
    icon: <HiOutlineRocketLaunch className="h-16 w-16" />,
    img: product,
  },
  {
    title: "Marketing",
    icon: <PiMegaphoneSimpleFill className="h-16 w-16" />,
    img: marketing,
  },
  {
    title: "Operations",
    icon: <SlCompass className="h-16 w-16" />,
    img: operations,
  },
  {
    title: "HR",
    icon: <FaPuzzlePiece className="h-16 w-16" />,
    img: hr,
  },
];

const TeamCarousel = () => {
  const [active, setActive] = useState(items[0]);
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="flex gap-6 mt-5 ">
        {items.map((item) => {
          return (
            <div
              key={item.title}
              onClick={() => {
                setActive(item);
              }}
              style={{
                backgroundColor: active.title === item.title ? "#ffffff" : "",
              }}
              className="px-5 py-3 border-2 rounded-lg flex flex-col items-center gap-2 border-gray-300/80 w-[8vw] bg-gray-300/80 hover:bg-gray-300 transition-all cursor-pointer shadow-md"
            >
              {item.icon}
              {item.title}
            </div>
          );
        })}
      </div>
      <Image
        src={active.img}
        alt=""
        className="rounded-lg border-2 border-gray-300 mt-5 w-full"
      />
    </div>
  );
};

export default TeamCarousel;
