import Link from "next/link";
import React from "react";
import Image from "next/image";

const TrendMovie = ({ releaseDate, title, img, id, isSeries }) => {
  const myImg = `https://image.tmdb.org/t/p/w154/${img}`;

  return (
    <section className="relative mb-2.5 h-[319.19]">
      <Link
        href={`${!isSeries ? `/movies/${id}` : `/series/${id}`}`}
        className="relative top-0 cursor-pointer bg-transparent"
      >
        <div className="relative w-fit overflow-hidden rounded-[10px]">
          <Image
            src={myImg}
            alt={title}
            className=""
            height={255.34}
            width={166.13}
            unoptimized={true} // Added to avoid optimization
          />
          <div className="movie-bg relative bottom-[5px] z-10 mt-[-30px] h-[100px] w-full rounded-b-[10px] p-2.5 text-white">
            <h4 className="absolute bottom-[30px] m-0 text-[1.1rem] font-normal leading-[15px] text-[#f9c000]">
              {title}
            </h4>
            <span className="absolute bottom-1 m-0 font-light">
              <span>{releaseDate.substring(0, 4)}</span>
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default TrendMovie;
