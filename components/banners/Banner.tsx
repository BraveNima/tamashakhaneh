import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type bannerProps = {
  bannerImage: StaticImageData;
  bannerAlt: string;
  tmdbId: number;
  isSeries: boolean;
};

const Banner = ({ bannerImage, bannerAlt, tmdbId, isSeries }: bannerProps) => {
  return (
    <Link
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
