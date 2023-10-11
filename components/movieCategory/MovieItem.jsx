import Link from "next/link";
import React from "react";

const TrendMovie = ({ release_date, title, img, id, isSeries }) => {
  const myImg = `https://image.tmdb.org/t/p/original/${img}`;
  return (
    <section className="relative mb-2.5">
      <Link
        prefetch={false}
        href={`${!isSeries ? `/movies/${id}` : `/series/${id}`}`}
        className="relative top-0 cursor-pointer bg-transparent"
      >
        <div className="relative w-fit overflow-hidden rounded-[10px]">
          <img className="h-[250px]" src={myImg} alt={title} />
          <div className="movie-bg relative bottom-[5px] z-10 -mt-[30px] h-[100px] w-full rounded-b-[10px] px-2.5 text-white">
            <h4 className="absolute bottom-[30px] m-0 text-[1.1rem] font-normal leading-[15px] text-[#f9c000]">
              {title}
            </h4>
            <span className="absolute bottom-1 m-0 font-light">
              <span>{release_date}</span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default TrendMovie;
