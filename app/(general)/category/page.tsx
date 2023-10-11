"use client";
import Link from "next/link";
import React, { useState } from "react";
import { catTabs, categoryData } from "@/constants/category";

const CategoryPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="mr-[5vw] mt-[120px] flex w-full  flex-wrap p-[9px] text-white">
      <div className="flex flex-col border-l border-solid border-[#ffffff33] p-[9px]">
        {catTabs.map((catTab) => (
          <span
            onClick={() => setActiveTab(catTab.id)}
            key={catTab.id}
            className={`cursor-pointer ${
              activeTab === catTab.id
                ? "w-full after:h-0.5 after:w-full after:bg-[#f90000] after:transition-all after:content-['']"
                : ""
            } whitespace-nowrap pt-8 text-xs font-normal after:flex mdl:text-base`}
          >
            {catTab.tab}
          </span>
        ))}
      </div>
      <div className="grid w-[75%] grid-cols-1 md:w-4/5 ">
        {categoryData.map((items) => (
          <div
            key={items.id}
            className={`${
              items.id === activeTab ? "flex" : "hidden"
            } col-start-1 row-start-1 flex flex-row flex-wrap py-[42px] pr-[14px] opacity-100 transition-all`}
          >
            {items.links.map((item) => (
              <Link
                key={item.id}
                aria-label={item.genre}
                href={"/"}
                className="catBtn"
              >
                {item.genre}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
