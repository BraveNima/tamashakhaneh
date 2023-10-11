"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Banner } from "..";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { StaticImageData } from "next/image";
import { Key } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Banners = ({ bannersData }) => {
  return (
    <article>
      <section className="relatve mx-[30px] mt-[70px]">
        <Swiper
          effect={"fade"}
          pagination={{
            clickable: true,
            el: "bullet",
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="mySwiper "
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {bannersData.map((banner) => (
            <SwiperSlide key={banner.movieId}>
              <Banner
                key={banner.movieId}
                bannerImage={banner.moviePoster}
                bannerAlt={banner.movietitle}
                tmdbId={banner?.tmdbId}
                isSeries={banner?.isSeries}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
};

export default Banners;
