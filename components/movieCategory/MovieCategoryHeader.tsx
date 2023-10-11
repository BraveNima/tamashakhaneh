import Image from "next/image";
import { miniLogo } from "@/public/assets/logos";

interface movieCategoryProps {
  movieCatTitle: string;
  movieCatBtntitle: string;
  isButtonDisable: boolean;
  isMargintop: boolean;
}

const MovieCategoryHeader = ({
  movieCatTitle,
  movieCatBtntitle,
  isButtonDisable,
  isMargintop,
}: movieCategoryProps) => {
  return (
    <div
      className={`${
        isMargintop ? "md:mt-[5rem]" : "md:mt-0"
      } z-10 mt-8 flex w-full items-center justify-between px-4 pb-[7px] xs:px-5`}
    >
      <Image
        src={miniLogo}
        alt="لوگو تماشاخانه"
        className="relative -z-10 mb-[15px] block w-10 opacity-10 grayscale-[1]"
      />

      <h5 className="absolute mb-4 mr-14 mt-0 flex cursor-pointer text-base font-bold text-[#f4bf00] md:text-[20px]  md:font-semibold">
        {movieCatTitle}
        {isButtonDisable || (
          <div className="flex">
            <span className="float-right mx-2.5 my-[5px] h-[15px] w-px rotate-0 bg-[#555555]" />
            <button className="ml-4 flex cursor-pointer items-center justify-between p-0 text-sm font-normal text-[#B3B3B2] ">
              <span>{movieCatBtntitle}</span>
            </button>
          </div>
        )}
      </h5>
    </div>
  );
};

export default MovieCategoryHeader;
