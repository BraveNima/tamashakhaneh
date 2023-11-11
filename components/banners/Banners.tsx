"use client";
import { StaticImageData } from "next/image";
import { Key } from "react";
import { Banner } from "..";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banners = ({ bannersData }: any) => {
  return (
    <article>
      <section className="relative mx-[30px] mt-[70px]">
        <Swiper
          effect={"fade"}
          pagination={{
            clickable: true,
            el: "bullet",
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          className="swiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {bannersData.map(
            (banner: {
              movieId: Key | null | undefined;
              moviePoster: StaticImageData;
              movietitle: string;
              tmdbId: number;
              isSeries: boolean;
            }) => (
              <SwiperSlide key={banner.movieId}>
                <Banner
                  key={banner.movieId}
                  bannerImage={banner.moviePoster}
                  bannerAlt={banner.movietitle}
                  tmdbId={banner?.tmdbId}
                  isSeries={banner?.isSeries}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </section>
    </article>
  );
};


export default Banners;
