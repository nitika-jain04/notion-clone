import { IoIosArrowRoundForward } from "react-icons/io";
import peek2 from "../public/images/peek2.png";
import { IoHomeSharp } from "react-icons/io5";
import wikiTile from "../public/images/wikiTile.webp";
import Image from "next/image";
import { FaFlagCheckered } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiNotepadBold } from "react-icons/pi";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";

const Templates = () => {
  return (
    <div className="mt-5 w-[60vw]">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-2 bg-[#f6f5f4] border-2 border-[#f6f5f4] p-7 relative rounded-lg min-h-[60vh] h-full">
          <IoHomeSharp className="text-orange-500 h-5 w-5" />
          <h3 className="font-semibold mt-3">Company wiki</h3>

          <button className="mt-3 text-sm flex items-center text-blue-500 hover:underline">
            <p>Get template</p>
            <IoIosArrowRoundForward className="w-5 h-5" />
          </button>
          <Image
            src={wikiTile}
            alt=""
            className=" rounded-br-lg rounded-tl-lg absolute bottom-0 right-0 w-[90%]"
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-5">
          <div className="bg-[#f6f5f4] p-7 rounded-lg ">
            <FaFlagCheckered className="text-blue-500 h-6 w-6" />
            <h1 className="font-semibold mt-3">Product roadmap</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-[#f6f5f4] p-7 rounded-lg relative">
            <IoMdCheckmarkCircle className="text-orange-500 h-6 w-6" />
            <h1 className="font-semibold mt-3">OKRs</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>

            <Image
              src={peek2}
              alt=""
              className="absolute bottom-[8rem] left-5 w-[70%]"
            />
          </div>
          <div className="bg-[#f6f5f4] p-7 rounded-lg">
            <PiNotepadBold className="text-yellow-500 h-6 w-6" />
            <h1 className="font-semibold mt-3">Meeting notes</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-[#f6f5f4] p-7 rounded-lg">
            <IoAirplaneSharp className="text-red-500 h-6 w-6" />
            <h1 className="font-semibold mt-3">Vacation planner</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-[#f6f5f4] p-7 rounded-lg">
            <FaCalendarAlt className="text-emerald-500 h-6 w-6" />
            <h1 className="font-semibold mt-3">Editorial calendar</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-[#f6f5f4] p-7 rounded-lg">
            <FaInbox className="text-purple-700 h-6 w-6" />
            <h1 className="font-semibold mt-3">Habit tracker</h1>

            <button className="pt-8 text-sm flex items-center text-blue-500 hover:underline">
              <p>Get template</p>
              <IoIosArrowRoundForward className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
