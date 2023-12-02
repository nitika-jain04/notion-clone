import Image from "next/image";
import avatars from "../public/images/avatars.webp";
import icons from "../public/images/icons.webp";
import welcome from "../public/images/welcome.webp";
import truck from "../public/images/truck.webp";
import { BsThreeDots } from "react-icons/bs";

import user1 from "../public/images/user1.png";
import user2 from "../public/images/user2.png";
import user3 from "../public/images/user3.webp";

const reviews = [
  {
    name: "Deborah Mecca",
    username: "DebMecca",
    photo: user1,
    text: (
      <p className="text-sm mt-3">
        I used to HATE documenting things. And then I started using{" "}
        <span className="text-blue-500">@NotionHQ </span>
        and I document a lot. A LOT A LOT. Now I just realize that it
        {` wasn't `}
        that I hated documenting, I just hated Google Docs.
      </p>
    ),
  },
  {
    name: "André Blackman",
    username: "mindofandre",
    photo: user2,
    text: (
      <p className="text-sm mt-3">
        One of the most incredible things about{" "}
        <span className="text-blue-500">@NotionHQ </span>
        is the dynamic community being built - creating and sharing at its best.
      </p>
    ),
  },
  {
    name: "Oliver Peyre",
    username: "opeyre",
    photo: user3,
    text: (
      <p className="text-sm mt-3">
        <span className="text-blue-500">@NotionHQ </span>
        Truly impressed by the velocity and quality of your work. Making using
        Notion even more fun week after week!
      </p>
    ),
  },
];

const AvatarSection = () => {
  return (
    <div className="mt-10 w-[60vw]">
      <Image src={avatars} alt="" />

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-[#f6f5f4] p-7 w-full rounded-lg">
          <p className="text-blue-500 text-5xl font-semibold">1M+</p>
          <p className="text-xs mt-1">community members</p>
        </div>
        <div className="bg-[#f6f5f4] p-7 w-full rounded-lg">
          <p className="text-blue-500 text-5xl font-semibold">150+</p>
          <p className="text-xs mt-1">community groups</p>
        </div>
        <div className="bg-[#f6f5f4] p-7 w-full rounded-lg">
          <p className="text-blue-500 text-5xl font-semibold">50+</p>
          <p className="text-xs mt-1">countries represented</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-[#f6f5f4] p-7 w-full rounded-lg">
          <p className=" text-lg font-semibold">An always-on support network</p>
          <p className="text-sm mt-1">
            Swap setups and share tips in over 149 online <br /> communities.
          </p>

          <Image src={icons} alt="" className="mt-8 w-[60%]" />
        </div>

        <div className="bg-[#f6f5f4] p-7 w-full rounded-lg relative">
          <p className=" text-lg font-semibold">Choose your language</p>
          <p className="text-sm mt-1">
            Notion currently supports English, Korean, Japanese, <br /> French,
            German, Spanish, and Portuguese. With more to <br /> come!
          </p>

          <Image
            src={welcome}
            alt=""
            className="mt-8 absolute w-[93%] right-0 bottom-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="bg-[#f6f5f4] p-5 w-full rounded-lg col-span-2 flex flex-col items-center">
          <div className="h-full flex flex-col mt-10 items-center">
            <Image src={truck} alt="" className="object-cover" />
          </div>
          <p className="text-sm mt-4">Community meet-up in Tokyo</p>
          <BsThreeDots className="h-6 w-6" />
        </div>

        <div className="grid grid-cols-1 w-full gap-5">
          {reviews.map((review) => {
            return (
              <div
                className="w-full p-4 bg-[#f6f5f4] rounded-lg"
                key={review.name}
              >
                <div className="flex items-center">
                  <Image
                    src={review.photo}
                    alt=""
                    className="rounded-full h-14 w-14"
                  />
                  <div>
                    <h1 className="font-semibold ml-2">{review.name}</h1>
                    <p className="text-sm ml-2 text-black/80">
                      @{review.username}
                    </p>
                  </div>
                </div>
                {review.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;
