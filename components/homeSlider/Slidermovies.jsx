"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Slidermovie from "./Slidermovie";
//styles
import "swiper/css";
import "swiper/css/navigation";

// const slidersDateProps = {
//   persianTitle: string,
//   englishTitle: string,
//   banner: string,
//   descr: string,
//   id: number,
// };

export default function Sliders({ slidersDate }) {
  console.log(slidersDate);
  return (
    <article>
      <div className="">
        <div className="w-full">
          <section className="relative after:absolute after:bottom-0  after:h-[150px] after:w-full after:bg-gradient-to-br">
            <div className="h-[455px]  xs:h-[unset]">
              <div className="absolute left-[2rem] top-[26rem] z-10 ml-0 mr-auto flex xs:bottom-20 xs:top-[unset]">
                <div className="swiper-btn-prev"></div>
                <div className="swiper-btn-next"></div>
              </div>
              <Swiper
                navigation={{
                  prevEl: ".swiper-btn-prev",
                  nextEl: ".swiper-btn-next",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                centeredSlides={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {slidersDate.map((item) => (
                  <SwiperSlide key={item?.id}>
                    <Slidermovie
                      banner={item?.backdrop_path}
                      mobileBanner={item?.poster_path}
                      englishTitle={item?.original_title || item?.original_name}
                      persianTitle={item?.title || item?.name}
                      descr={item?.overview}
                      tmdbId={item?.id}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
