import { MovieCategoryHeader } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiveChannels } from "@/constants/liveChannels";

const LiveChannelsPage = () => {
  return (
    <div className="px-[25px] pt-[3rem]">
      <MovieCategoryHeader
        movieCatTitle={"پخش زنده"}
        movieCatBtntitle={"شبکه های سیما"}
        isButtonDisable={false}
        isMargintop={false}
      />
      <div className="flex flex-wrap">
        <div className="flex w-full flex-wrap justify-start">
          {LiveChannels.map((channel) => (
            <div
              key={channel.id}
              className="m-5 inline-block w-[250px] rounded-[15px]"
            >
              <Link className="block w-full" href={"/"} key={channel.id}>
                <Image
                  src={channel.logo}
                  alt={channel.title}
                  className="relative left-0 top-0 mx-auto h-full w-full cursor-pointer rounded-[10px]"
                />
                <div className="rounded-[10px] bg-[#494a4b] p-[15px] text-center text-[16px] font-bold text-white">
                  {channel.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChannelsPage;
