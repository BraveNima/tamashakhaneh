import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const Banner = ({ bannerImage, bannerAlt, tmdbId, isSeries }) => {
  return (
    <Link
      prefetch={false}
      href={`${!isSeries ? `/movies/${tmdbId}` : `/series/${tmdbId}`}`}
      className="relative block cursor-pointer"
    >
      <Image
        className="h-full w-full rounded-[10px]"
        src={bannerImage}
        alt={bannerAlt}
      />
    </Link>
  );
};

export default Banner;
