"use client";

import Tab from "./Tab";
import { BsStars } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import ai from "../public/images/ai.png";
import wiki from "../public/images/wiki.png";
import projects from "../public/images/projects.png";
import docs from "../public/images/docs.png";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    title: "AI",
    description: "Ask literally anything. Notion will answer.",
    color: "#800080",
    icon: (
      <div className="p-1 bg-purple-200/50 rounded-md">
        <BsStars className="h-6 w-6 text-purple-800" />
      </div>
    ),
    img: ai,
  },
  {
    title: "Wikis",
    description: "Centralize your knowledge. No more hunting for answers.",
    color: "#FF0000",
    icon: (
      <div className="p-1 bg-red-200/50 rounded-md">
        <PiBookOpen className="h-6 w-6 text-red-800" />
      </div>
    ),
    img: wiki,
  },
  {
    title: "Projects",
    description: "Manage complex projects without the chaos",
    color: "#0000FF",
    icon: (
      <div className="p-1 bg-blue-200/50 rounded-md">
        <TbTargetArrow className="h-6 w-6 text-blue-500" />
      </div>
    ),
    img: projects,
  },
  {
    title: "Docs",
    description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    color: "#DAA520",
    icon: (
      <div className="p-1 bg-orange-200/50 rounded-md">
        <IoDocumentTextOutline className="h-6 w-6 text-orange-500" />
      </div>
    ),
    img: docs,
  },
];

const HeroTabs = () => {
  const [activeImage, setActiveImage] = useState(ai);
  return (
    <div className="flex items-center flex-col">
      <div className="flex gap-5">
        {tabs.map((tab) => {
          return (
            <Tab tab={tab} key={tab.title} setActiveImage={setActiveImage} />
          );
        })}
      </div>

      <div className="mt-4 pb-4">
        <Image src={activeImage} alt="" className="w-full" placeholder="blur" />
      </div>
    </div>
  );
};

export default HeroTabs;
