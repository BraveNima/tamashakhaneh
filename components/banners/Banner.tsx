import Image, { StaticImageData } from "next/image";
import Link from "next/link";
/**
 * The above type represents the props required for a banner component in a TypeScript React
 * application.
 * @property {StaticImageData} bannerImage - The `bannerImage` property is of type `StaticImageData`.
 * It represents the image that will be displayed in the banner.
 * @property {string} bannerAlt - The `bannerAlt` property is a string that represents the alternative
 * text for the banner image. Alternative text is used to provide a textual description of the image
 * for users who are visually impaired or when the image cannot be displayed.
 * @property {number} tmdbId - The `tmdbId` property is a number that represents the unique identifier
 * of a movie or TV show on the TMDB (The Movie Database) platform. It is used to fetch additional
 * information about the movie or TV show, such as its title, release date, cast, and more.
 * @property {boolean} isSeries - A boolean value indicating whether the banner is for a series or not.
 */

type bannerProps = {
  bannerImage: StaticImageData;
  bannerAlt: string;
  tmdbId: number;
  isSeries: boolean;
};

/**
 * The Banner component is a clickable image that links to either a movie or series page based on the
 * provided tmdbId.
 * @param {bannerProps}  - - `bannerImage`: The URL of the banner image.
 */
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
