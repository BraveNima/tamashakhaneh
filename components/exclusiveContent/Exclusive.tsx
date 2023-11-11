"use client";
import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";

type ExclusiveItemProps = {
  index: number;
  curItem: number;
  setCurItem: React.Dispatch<React.SetStateAction<number>>;
  image: StaticImageData;
  title: string;
};

const ExclusiveItem = ({
  index,
  curItem,
  setCurItem,
  image,
  title,
}: ExclusiveItemProps) => {
  function handleIndexNum() {
    setCurItem(index);
  }
  return (
    <div
      onClick={handleIndexNum}
      style={{ backgroundImage: `url(${image.src})` }}
      className={` ${curItem === index ? "flex w-3/5 flex-row-reverse" : ""} ${
        image.src
      } relative mr-5 h-[60vh] min-h-[13vw] w-1/5 cursor-pointer rounded-[10px] bg-cover bg-center bg-no-repeat text-[#3d3d3d] transition-all duration-500 ease-in first:mr-0 `}
    >
      <Link
        href={"#"}
        className={`absolute ${
          index === curItem
            ? "opacity-100 transition-shadow duration-1000 ease-in "
            : "opacity-0"
        } bottom-5 right-5 z-10 mx-auto ml-4  block h-10 w-32 cursor-pointer rounded-md bg-[#b2a5a529] p-2 text-center text-[1.3rem] font-extrabold text-white no-underline`}
      >
        {title}
      </Link>
      <div className="absolute inset-4 z-10 rounded-[10px] text-white" />
    </div>
  );
};

export default ExclusiveItem;
