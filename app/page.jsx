import HeroTabs from "@/components/HeroTabs";
import { IoIosArrowRoundForward } from "react-icons/io";
import logos from "../public/images/logo.png";
import Image from "next/image";
import tools from "../public/images/tools.png";
import peek from "../public/images/peek.png";
import pencil from "../public/images/pencil.webp";
import metalab from "../public/images/metalab.webp";
import { TbArrowsShuffle } from "react-icons/tb";
import Features from "@/components/Features";
import { FaRegEye } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import info from "../public/images/info.webp";
import idea from "../public/images/idea.png";
import match from "../public/images/match-group.png";
import TeamCarousel from "@/components/TeamCarousel";
import AvatarSection from "@/components/AvatarSection";
import Templates from "@/components/Templates";
import parade from "../public/images/parade.png";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="pb-10">
      <HeroSection />
      <HeroTabs />

      <div className="flex flex-col items-center mt-20">
        <h1 className="text-4xl font-semibold">
          Millions run on Notion every day
        </h1>
        <p className="text-center text-sm">
          Powering the world’s best teams, from next-generation startups <br />{" "}
          to established enterprises.
        </p>
        <button className="mt-3 text-sm flex items-center text-blue-500">
          <p>Read customer stories</p>
          <IoIosArrowRoundForward className="w-5 h-5" />
        </button>

        <Image src={logos} alt="" className="mt-4" />
      </div>

      <div className="flex flex-col items-center mt-28">
        <h1 className="text-4xl font-semibold">Consolidate tools. </h1>
        <h1 className="text-4xl font-semibold">Cut costs. </h1>

        <div className="mt-10 relative">
          <Image src={tools} alt="" className="" />
          <Image
            src={pencil}
            alt=""
            className="absolute -top-[10.5rem] -right-[5.8rem] w-[35%]"
          />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl max-w-2xl text-center">{`"We got rid of nearly a dozen different tools because of what Notion does for us."`}</p>
          <div className="mt-4 flex items-center gap-2">
            <Image src={metalab} alt="" />
            <div>
              <h3 className="text-sm font-semibold">Justin Watt</h3>
              <h3 className="text-xs">Director of Ops & Marketing, MetaLab</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-40 ">
          <div className="flex items-center space-x-10 relative">
            <Image
              src={peek}
              alt=""
              className="absolute -bottom-2 -left-[16vw]"
            />
            <h1 className="text-4xl mb-6 font-bold">
              Powerful building blocks
            </h1>
          </div>
          <div className="pt-20 w-[80vw] self-start bg-gray-300 p-10 rounded-lg">
            <div className="relative">
              <TbArrowsShuffle className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="font-semibold text-lg mt-2">
              Visualize, filter & sort any way you want
            </h2>
            <p className="max-w-lg font-medium text-black/80">
              Show only tasks assigned to you, or items marked as urgent. Break
              down any project in the way that’s most helpful to you.
            </p>
            <div className="flex flex-col items-center mt-5">
              <Features />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[80vw] gap-2 mt-2">
          <div className="bg-gray-300 p-10 rounded-lg relative h-[80vh] border-2">
            <FaRegEye className="h-8 w-8 text-blue-500" />
            <h1 className="font-semibold mt-4">Customize the info you track</h1>
            <p className="text-sm mt-1">
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </p>
            <Image
              src={info}
              alt=""
              className="absolute bottom-0 right-0 rounded-br-lg "
            />
          </div>

          <div className="bg-gray-300 p-10 rounded-lg relative h-[80vh] border-2">
            <IoColorPaletteOutline className="h-8 w-8 text-blue-500" />
            <h1 className="font-semibold mt-4">
              Build any page, communicate any idea
            </h1>
            <p className="text-sm mt-1">
              Everything is drag and drop in Notion — images, toggles, to-do’s,
              even embedded databases.
            </p>
            <Image
              src={idea}
              alt=""
              className="absolute bottom-0 right-0 rounded-br-lg "
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-2xl max-w-2xl text-center">{`"Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."`}</p>
        <div className="mt-4 flex items-center gap-2">
          <Image src={match} alt="" className="w-6" />
          <div>
            <h3 className="text-sm font-semibold">Rahim Makani</h3>
            <h3 className="text-xs">Director of Product, Matchgroup</h3>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold">Every team, side-by-side</h1>
        <TeamCarousel />
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Join a global movement.
          <br /> Unleash your creativity.
        </h1>
        <p className="text-center mt-3">
          Our vibrant community produces content, teaches courses, and leads
          events all over <br /> the world.
        </p>

        <button className="mt-3 text-sm flex items-center text-blue-500">
          <p>Learn more</p>
          <IoIosArrowRoundForward className="w-5 h-5" />
        </button>

        <AvatarSection />
      </div>

      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Endless ways to use it{" "}
        </h1>
        <button className="mt-3 text-sm flex items-center text-blue-500 hover:underline">
          <p>Browse all templates</p>
          <IoIosArrowRoundForward className="w-5 h-5" />
        </button>

        <Templates />
      </div>

      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Get started for free{" "}
        </h1>
        <p className="mt-3">
          Play around with it first. Pay and add your team later.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
            Try Notion free
          </button>
          <button className=" text-sm flex items-center text-blue-500 hover:underline">
            <p>Request a demo</p>
            <IoIosArrowRoundForward className="w-5 h-5" />
          </button>
        </div>
        <Image className="mt-10" src={parade} alt="" />
      </div>
      <div className="w-full bg-[#f6f5f4] h-[2px]"></div>

      <div className="mt-16 flex flex-col items-center">
        <Footer />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-14 items-center">
      <h1 className="text-6xl font-semibold">Write, plan, share.</h1>
      <h1 className="text-6xl font-semibold">With AI at your side.</h1>

      <p className="my-5 text-2xl font-semibold">
        Notion is the connected workspace where better, faster work happens.
      </p>

      <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md">
        <p>Get Notion free</p>
        <IoIosArrowRoundForward className="h-6 w-6" />
      </button>

      <img
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
        alt=""
        className="w-[40vw] mt-14"
      />
    </div>
  );
};

export default HomePage;
