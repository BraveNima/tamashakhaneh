"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu, GiHomeGarage } from "react-icons/gi";
import { NavMobilelist } from "@/constants/header";

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div
        onClick={() => setToggleMenu((toggle) => !toggle)}
        className={`${
          toggleMenu ? "block" : "hidden"
        } fixed right-0 top-0 h-full w-full`}
      >
        <div className="fixed top-0 z-10 flex h-full w-[235px] translate-x-0 transform flex-col overflow-y-hidden rounded-bl-2xl rounded-tl-2xl bg-[#0a0d148c] px-5 py-[66px] text-white ring-0 backdrop-blur-[5px] ease-in will-change-transform">
          <div className="right-0 mb-12 mr-[-3px] mt-[-34px] flex items-center justify-between">
            <button></button>
          </div>
          {NavMobilelist.map((mobileLink) => (
            <Link
              key={mobileLink.id}
              href={`${mobileLink?.href}`}
              className="mb-2 flex w-full items-center text-[13px] "
            >
              <span className="m-2.5 h-6 w-6">{mobileLink.icon}</span>
              <span className="hover:text-[#6eb8ff]">
                {mobileLink?.navItem}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => setToggleMenu((toggle) => !toggle)}
        className="relative mx-[7px] pl-5 px-1.5 mdl:hidden"
      >
        <GiHamburgerMenu className="h-8 w-8 fill-white text-base opacity-90" />
      </button>
    </>
  );
};

export default MobileMenu;
