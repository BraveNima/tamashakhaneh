import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type MiniBannerprops = {
  miniBannerImg: StaticImageData;
  miniBannerAlt: string;
  tmdbId: number;
  isSeries: boolean;
};

const MiniBanner = ({
  miniBannerImg,
  miniBannerAlt,
  tmdbId,
  isSeries,
}: MiniBannerprops) => {
  return (
    <Link
    
      href={`${!isSeries ? `/movies/${tmdbId}` : `/series/${tmdbId}`}`}
      className="relative block cursor-pointer"
    >
      <Image
        src={miniBannerImg}
        alt={miniBannerAlt}
        className="w-full rounded-[10px]"
      />
    </Link>
  );
};

export default MiniBanner;
