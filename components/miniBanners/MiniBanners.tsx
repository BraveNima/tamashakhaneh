"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MiniBanner } from "..";
import { StaticImageData } from "next/image";
import { Key } from "react";

const MiniBanners = ({ dataItems }: any) => {
  return (
    <div className="mb-7 mt-[84px] w-full overflow-hidden">
      <section className="relative z-10 mx-[15px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper w-full"
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: "20",
            },
          }}
        >
          {dataItems.map(
            (item: {
              id: Key | null | undefined;
              poster: StaticImageData;
              alt: string;
              tmdbId: number;
              isSeries: boolean;
            }) => (
              <SwiperSlide key={item?.id}>
                <MiniBanner
                  miniBannerImg={item?.poster}
                  miniBannerAlt={item?.alt}
                  tmdbId={item?.tmdbId}
                  isSeries={item?.isSeries}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </section>
    </div>
  );
};


export default MiniBanners;
