import Image from "next/image";
import Link from "next/link";
import React from "react";
import { download } from "@/assets/general";
import { googlePlay, myket } from "@/assets/apps";

type DownloadoptionProps = {
  title: string;
  desc: string;
};

const Downloadoption = ({ title, desc }: DownloadoptionProps) => {
  return (
    <div className="h-[calc(100vh_-_60px)] flex-grow-0 basis-[calc(100%)] border-l border-l-[#ffffff70] bg-[#000000eb] text-white md:basis-[calc(50%)] lg:basis-[calc(25%)]">
      <h2 className="my-4 block p-[11%] text-center text-xl font-bold">
        {title}
      </h2>
      <h6 className="px-[11%] text-center text-[11px] font-thin leading-[1.4rem]">
        {desc}
      </h6>
      <div className="flex flex-col flex-wrap items-center py-8">
        <Link
          href={"/"}
          className="flex w-[13rem] flex-wrap first:justify-around first:rounded-[5px] first:border first:py-2"
        >
          دریافت مستقیم
          <Image
            className="my-0 w-5 cursor-pointer"
            src={download}
            alt="download with google play"
          />
        </Link>
        <Link href={"/"} className="flex w-[13rem] flex-wrap justify-center">
          <Image
            className="my-2.5 w-full cursor-pointer"
            src={googlePlay}
            alt="download with google play"
          />
        </Link>
        <Link href={"/"} className="flex w-[13rem] flex-wrap justify-center">
          <Image
            className="my-2.5 w-full cursor-pointer"
            src={myket}
            alt="download with google play"
          />
        </Link>
        <Link
          href={"/"}
          className="mb-2.5 flex w-[13rem] flex-wrap justify-center"
        >
          <Image
            className="my-2.5  w-full cursor-pointer"
            src={myket}
            alt="download with google play"
          />
        </Link>
      </div>
      <div className="m-auto w-fit">
        <h5>تغییرات آخرین نسخه</h5>
        <div className="py-[3px] text-[11px]">رفع باگ</div>
        <div className="py-[3px] text-[11px]">آخرین نسخه 4.4.1.0</div>
      </div>
    </div>
  );
};

export default Downloadoption;
