"use client";
import Image, { StaticImageData } from "next/image";

type BroadcastProps = {
  broadcastDay: StaticImageData;
  broadcastTitle: string;
  day: string;
  broadcastBanner: StaticImageData;
  broadcastBannerAlt: string;
  index: number;
};
const Broadcast = ({
  broadcastDay,
  day,
  broadcastTitle,
  broadcastBanner,
  broadcastBannerAlt,
  index,
}: BroadcastProps) => {
  return (
    <div
      style={{
        background: `url(${broadcastDay.src}) right center / cover`,
      }}
      className={`flex w-full items-center justify-end rounded-[15px] !bg-contain bg-fixed md:bg-cover mdl:hidden `}
    >
      <div
        className={`my-2.5 flex w-[70%] items-center justify-end xs:w-[60%]`}
      >
        <Image
          src={broadcastBanner}
          alt={broadcastBannerAlt}
          className="mr-5 h-auto w-[30%] max-w-[110px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Broadcast;
