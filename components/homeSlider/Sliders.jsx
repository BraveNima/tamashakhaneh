"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Slider from "./Slider";

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
  return (
    <article>
      <div className="">
        <div className="w-full">
          <section className="relative after:absolute after:bottom-0  after:h-[150px] after:w-full after:bg-gradient-to-br">
            <div className="h-[455px] xs:h-[unset]">
              <div className="absolute left-[2rem] top-[26rem] z-10 ml-0 mr-auto flex xs:bottom-20 xs:top-[unset]">
                <div className="swiper-btn-prev"></div>
                <div className="swiper-btn-next"></div>
              </div>
              <Swiper
                navigation={{
                  prevEl: ".swiper-btn-prev",
                  nextEl: ".swiper-btn-next",
                }}
                // autoplay={{
                //   delay: 7000,
                //   disableOnInteraction: false,
                // }}
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
                    <Slider
                      banner={item?.banner}
                      mobileBanner={item?.mobileBanner}
                      englishTitle={item?.englishTitle}
                      persianTitle={item?.persianTitle}
                      descr={item?.descr}
                      miniBanner={item?.miniBanner}
                      tmdbId={item?.tmdbId}
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
