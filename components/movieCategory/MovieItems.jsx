"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieItem } from "..";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TrendMoviesList = ({ results }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        // when window width is >= 768px
        500: {
          slidesPerView: 4,
        },
        800: {
          slidesPerView: 5,
        },
        900: {
          slidesPerView: 6,
        },
        1100: {
          slidesPerView: 7,
        },

        1400: {
          slidesPerView: 8,
        },
      }}
      modules={[Navigation]}
      dir="rtl"
      navigation={false}
      grabCursor={true}
      className="swiper !px-5"
    >
      {results.map((item) => (
        <>
          <SwiperSlide key={item.id}>
            <MovieItem
              title={item?.title || item?.name}
              releaseDate={item?.release_date || item?.first_air_date}
              img={item?.poster_path || item?.backdrop_path}
              id={item?.id}
              isSeries={item?.first_air_date !== undefined}
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default TrendMoviesList;
