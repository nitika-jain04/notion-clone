import { SiNotion } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const col1 = [
  {
    title: "Product",
    links: ["Wikis", "Projects", "Docs", "Notion AI", "What's new"],
  },
  {
    title: "Solutions",
    links: [
      "Enterprise",
      "Small business",
      "Personal use",
      "Remote work",
      "Startups",
      "Education",
      "Nonprofits",
      "Engineering",
      "Product",
      "Design",
      "Managers",
    ],
  },
];

const col2 = [
  {
    title: "Download",
    links: ["iOS & Android", "Mac & Windows", "Web Clipper"],
  },
  {
    title: "Build",
    links: [
      "Integrations",
      "Templates",
      "API docs",
      "Guides & tutorials",
      "Hire a consultant",
      "Become an affiliate",
    ],
  },
  {
    title: "Learn",
    links: ["Customer stories", "Help center", "Webinars", "Blog", "Community"],
  },
];

const col3 = [
  {
    title: "Get Started",
    links: [
      "Switch from Confluence",
      "Switch from Asana",
      "Switch from Evernote",
      "Compare vs Monday",
      "Compare vs Clickup",
      "Compare vs Jira",
    ],
  },
  {
    title: "Resources",
    links: [
      "Pricing",
      "About us",
      "Careers",
      "Media kit",
      "Email us",
      "Security",
      "Cookie settings",
      "Terms & privacy",
      "California Privacy Notice",
      "Status",
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-[75vw]">
      <div className="grid grid-cols-4 gap-5">
        <div>
          <div className="flex items-center gap-2">
            <SiNotion className="h-8 w-8" />
            <h1 className="text-lg font-semibold">Notion</h1>
          </div>

          <div className="mt-5 flex items-center gap-1">
            <div className="p-1 hover:bg-[#f6f5f4] transition-all cursor-pointer rounded text-gray-500 hover:text-black">
              <FaInstagram className="h-5 w-5" />
            </div>
            <div className="p-1 hover:bg-[#f6f5f4] transition-all cursor-pointer rounded text-gray-500 hover:text-blue-500">
              <FaTwitter className="h-5 w-5" />
            </div>
            <div className="p-1 hover:bg-[#f6f5f4] transition-all cursor-pointer rounded text-gray-500 hover:text-blue-400">
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div className="p-1 hover:bg-[#f6f5f4] transition-all cursor-pointer rounded text-gray-500 hover:text-blue-500">
              <FaFacebook className="h-5 w-5" />
            </div>
            <div className="p-1 hover:bg-[#f6f5f4] transition-all cursor-pointer rounded text-gray-500 hover:text-red-500">
              <FaYoutube className="h-5 w-5" />
            </div>
          </div>

          <div className="flex items-center mt-4 gap-2 py-2 px-4 border-2 w-fit rounded-lg hover:bg-[#f6f5f4]">
            <BsGlobe className="h-5 w-5 text-gray-500" />
            <p className="font-medium">English</p>
            <MdKeyboardArrowDown className="h-5 w-5 -ml-2 text-gray-500" />
          </div>
        </div>

        <div>
          {col1.map((col) => {
            return (
              <div key={col.title} className="mt-5">
                <h1 className="font-semibold">{col.title}</h1>
                <div className="mt-2 flex flex-col gap-2">
                  {col.links.map((link) => {
                    return (
                      <p
                        key={link}
                        className=" text-gray-500 hover:underline w-fit hover:text-blue-500 cursor-pointer"
                      >
                        {link}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {col2.map((col) => {
            return (
              <div key={col.title} className="mt-5">
                <h1 className="font-semibold">{col.title}</h1>
                <div className="mt-2 flex flex-col gap-2">
                  {col.links.map((link) => {
                    return (
                      <p
                        key={link}
                        className=" text-gray-500 hover:underline w-fit hover:text-blue-500 cursor-pointer"
                      >
                        {link}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {col3.map((col) => {
            return (
              <div key={col.title} className="mt-5">
                <h1 className="font-semibold">{col.title}</h1>
                <div className="mt-2 flex flex-col gap-2">
                  {col.links.map((link) => {
                    return (
                      <p
                        key={link}
                        className=" text-gray-500 hover:underline w-fit hover:text-blue-500 cursor-pointer"
                      >
                        {link}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
        <div>
          <h1 className="mt-4 text-sm font-medium hover:underline decoration-blue-500 cursor-pointer w-fit">
            Do Not Sell or Share My Info
          </h1>
          <p className=" text-xs text-gray-400 pt-3">
            © 2023 Notion Labs, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
