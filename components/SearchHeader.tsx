"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

type searchHeaderProps = {
  setSearchParams: Dispatch<SetStateAction<string>>;
  searchParams: string;
};

const SearchHeader = ({ setSearchParams, searchParams }: searchHeaderProps) => {
  return (
    <div className="w-full bg-[#0a0d14] px-0 md:px-8">
      <div className="flex w-full flex-wrap items-center justify-center px-4 py-8 md:flex-nowrap">
        <article className="m-auto mb-5 w-full px-4 md:m-0  md:mb-0 md:me-12 md:w-2/4 md:p-0">
          <article className="relative flex w-full items-center justify-between">
            <BiSearchAlt2 className="absolute right-4 h-6 w-6" />
            <input
              autoFocus
              onChange={(e) => setSearchParams(e.target.value)}
              value={searchParams}
              placeholder="فیلم سریال عوامل"
              type="text"
              className="h-10 w-full rounded-[5px] border-0 bg-[#39393a] pl-14 pr-12 text-[13px] leading-8 text-[#cccccc] outline-0"
            />
          </article>
        </article>
        <section className="m-0 h-full min-w-[107px] max-w-[200px] md:m-[unset] md:min-w-[170px]">
          <span
            className={
              "btn-bg relative ml-2.5 flex h-10 cursor-pointer select-none list-none items-center justify-center rounded-[5px] bg-primary px-2.5 text-center text-[10px] text-black shadow-sm md:text-base"
            }
          >
            <BiCaretDown />
            مرتب سازی
          </span>
        </section>
      </div>
    </div>
  );
};

export default SearchHeader;
