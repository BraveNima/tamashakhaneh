"use client";
import React, { useState } from "react";
import { MovieCategoryHeader } from "..";
import { ExclusiveInfo } from "@/constants/exclusiveContent";

import ExclusiveItem from "./Exclusive";

const Exclusive = () => {
  const [curItem, setCurItem] = useState(1);

  return (
    <div className="hidden h-full px-[25px] py-12 mdl:block ">
      <div className="float-right w-full p-2.5">
        <MovieCategoryHeader
          movieCatTitle={"اختصاصی"}
          movieCatBtntitle={""}
          isButtonDisable={true}
          isMargintop={false}
        />
        <div className="flex">
          {ExclusiveInfo.map((item) => (
            <ExclusiveItem
              key={item.index}
              index={item.index}
              curItem={curItem}
              setCurItem={setCurItem}
              image={item?.image}
              title={item?.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
