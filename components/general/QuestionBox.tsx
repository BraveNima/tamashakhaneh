"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { BiCaretDown, BiCaretUp } from "react-icons/bi";

type QuestionBoxProps = {
  QuestionBoxtitle: string;
  QuestionBoxRespond: string;
  index: number;
  onSelect: Dispatch<SetStateAction<number>>;
  selected: number;
};

const QuestionBox = ({
  QuestionBoxtitle,
  index,
  QuestionBoxRespond,
  onSelect,
  selected,
}: QuestionBoxProps) => {
  function handleSelect(i: number) {
    onSelect(i);

    if (i === selected) {
      onSelect(0);
    }
  }
  return (
    <>
      <Link
        scroll={false}
        onClick={() => handleSelect(index)}
        href="#"
        className={` ${
          selected === index ? " bg-[#f90000]" : " bg-[#2A2A2A]"
        } transition-al relative z-10 my-[5px] flex h-10 w-full items-center justify-between overflow-hidden rounded-[10px] px-4 py-2.5 text-right text-[11px] font-normal text-white duration-300 ease-in`}
      >
        <span>{QuestionBoxtitle}</span>
        {selected === index ? <BiCaretUp /> : <BiCaretDown />}
      </Link>
      <div
        style={{ transformOrigin: "center top" }}
        className={` ${
          selected === index
            ? "flex h-auto scale-y-100 overflow-hidden py-2.5"
            : "hidden h-0 scale-y-0 overflow-visible"
        }   px-[25px] text-justify transition-transform duration-300 ease-out`}
      >
        <span>{QuestionBoxRespond}</span>
      </div>
    </>
  );
};

export default QuestionBox;
