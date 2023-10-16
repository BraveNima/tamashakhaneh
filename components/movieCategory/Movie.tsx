import Link from "next/link";

type movieProps = {
  title: string;
  release_date: string;
  img: string;
  isSeries: boolean;
  id: number;
};

const Movie = ({ title, release_date, img, isSeries, id }:movieProps) => {
  const myImg = `https://image.tmdb.org/t/p/original/${img}`;

  if (img === null) {
    return null;
  }

  return (
    <div className="relative m-[5px] ml-0.5 mt-0.5 grow-0 basis-[calc((50%_-_10px)-_1px)] text-[11px] md:m-2.5 md:basis-[calc((25%_-_20px)-_1px)] lg:basis-[calc((16.6667%_-_20px)-_1px)] xl:basis-[calc((12.5%_-_20px)-_1px)]">
      <Link
        href={`${!isSeries ? `/movies/${id}` : `/series/${id}`}`}
        className="relative top-0 cursor-pointer"
      >
        <div className="relative h-fit overflow-hidden rounded-[10px]">
          <img src={myImg} alt="" className="mt-2.5 block w-full rounded-2xl" />
          <div className="movie-bg relative bottom-[5px] z-10 -mt-[30px] h-[100px] w-full rounded-b-[10px] px-2.5 text-white">
            <h4 className="absolute bottom-[30px] m-0 text-[15px] font-normal leading-[15px] text-[#f9c000]">
              {title}
            </h4>
            <span className="absolute bottom-1 m-0 font-light">
              <span>{release_date}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
