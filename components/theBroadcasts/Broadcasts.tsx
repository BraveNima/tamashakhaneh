"use client";
import { useState } from "react";
import { BroadcastDesktop, BroadcastMobile, MovieCategoryHeader } from "..";
import { broadcastInfo } from "@/constants/broadcasts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

//styles
import "swiper/css";
import "swiper/css/navigation";

const TheBroadcasts = () => {
  const [curItem, setCurItem] = useState(2);
  return (
    <div className={`h-full p-0 mdl:px-[25px] mdl:py-12`}>
      <div className="float-right w-full p-2.5 ">
        <MovieCategoryHeader
          movieCatTitle={"جدول پخش روزانه"}
          movieCatBtntitle={""}
          isButtonDisable={true}
          isMargintop={false}
        />
        <div className="px-9">
          <Swiper slidesPerView={1} navigation={true} modules={[Navigation]}>
            {broadcastInfo.map((item) => (
              <SwiperSlide key={item.index}>
                <BroadcastMobile
                  index={item.index}
                  broadcastDay={item.broadcastDay}
                  broadcastBanner={item.broadcastBanner}
                  broadcastBannerAlt={item.broadcastBannerAlt}
                  broadcastTitle={item.broadcastTitle}
                  day={item.day}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex">
          {broadcastInfo.map((item) => (
            <BroadcastDesktop
              key={item.index}
              index={item.index}
              broadcastDay={item.broadcastDay}
              broadcastBanner={item.broadcastBanner}
              broadcastBannerAlt={item.broadcastBannerAlt}
              broadcastTitle={item.broadcastTitle}
              day={item.day}
              curItem={curItem}
              onOpen={setCurItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBroadcasts;
