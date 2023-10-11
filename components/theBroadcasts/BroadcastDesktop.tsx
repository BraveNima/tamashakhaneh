"use client";
import Image, { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type BroadcastProps = {
  broadcastTitle: string;
  day: string;
  broadcastBanner: StaticImageData;
  broadcastBannerAlt: string;
  index: number;
  onOpen: Dispatch<SetStateAction<number>>;
  curItem: number;
  broadcastDay: StaticImageData;
};
const Broadcast = ({
  day,
  broadcastTitle,
  broadcastBanner,
  broadcastBannerAlt,
  onOpen,
  curItem,
  index,
  broadcastDay,
}: BroadcastProps) => {
  function handleToggleBroadcast() {
    onOpen(index);
  }
  return (
    <div
      style={{ backgroundImage: `url(${broadcastDay.src})`, backgroundPosition:"left center" }}
      onClick={handleToggleBroadcast}
      className={`relative mr-[15px] hidden h-max  min-h-[13vw] w-[12%] cursor-pointer rounded-[10px] bg-cover bg-no-repeat text-[#3d3d3d] transition-all first:mr-0 mdl:block  ${
        curItem === index ? "flex w-[60%] flex-row-reverse" : ""
      } `}
    >
      <div className="p-2.5 text-sm text-white">
        {curItem !== index && <div>{broadcastTitle}</div>}
        {curItem !== index && (
          <div className="transfrom-[unset] relative left-[unset] top-[7vw] flex h-[30px] min-w-[70px] items-center justify-center rounded-bl-[10px] rounded-tl-[10px] bg-[#8a0c17] px-1.5 py-[5px] text-xs lg:absolute lg:right-0 lg:top-[9vw] lg:text-sm">
            {day}
          </div>
        )}
        <div
          className={`${
            curItem ? "ml-5 flex flex-row-reverse items-center" : "hidden"
          }`}
        >
          {curItem === index && (
            <Image
              src={broadcastBanner}
              alt={broadcastBannerAlt}
              className="mr-5 h-auto w-[110px] rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
