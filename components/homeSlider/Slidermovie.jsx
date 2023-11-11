"use client";
import Link from "next/link";
import Image from "next/image";
import { pakhsh, ExclamationMark } from "@/public/assets/general";

const Slidermovie = ({
  banner,
  englishTitle,
  persianTitle,
  descr,
  mobileBanner,
  miniBanner,
  tmdbId,
}) => {
  const myBanner = `https://image.tmdb.org/t/p/original/${banner}`;

  return (
    <Link
      href={`/movies/${tmdbId}`}
      className="relative block cursor-pointer text-[unset]"
    >
      <div
        className={`slider-mobile-bg z-30 flex h-[691px] flex-col bg-transparent bg-contain bg-fixed bg-no-repeat object-contain text-xs xs:bg-cover`}
        style={{
          backgroundImage: `linear-gradient(
            rgba(23, 28, 36, 0) 10vw,
            rgb(23, 28, 36) 80vw
          ),
          linear-gradient(to left, rgba(23, 28, 36, 0.7), rgba(23, 28, 36, 0) 50%) , url(${myBanner}) `,
        }}
      >
        <div className=" flex min-h-[45vh] w-4/5 flex-col pr-8 xs:p-[56px]">
          {/* <img
            src={banner1mini}
            width={168}
            height={168}
            alt="banner title"
            className="z-10 mb-[-40px] block h-[168px] w-[168px] drop-shadow-sm xs:w-[25rem] md:h-[252px] md:w-[252px] xl:mb-[-50px] xl:mt-[-50px] "
          /> */}
          <div className="flex">
            <h5 className="ml-2.5 block select-text text-[15px] font-normal text-white md:text-2xl md:font-bold">
              {persianTitle}
            </h5>
          </div>
          <h1 className="z-10 mb-5 mt-3 block select-text text-[15px] font-thin text-white xs:text-lg">
            {englishTitle}
          </h1>
          <div className="z-10 mb-5 block h-12 md:mb-[30px]">
            <Image
              src={pakhsh}
              alt="پخش اختصاصی"
              className="ml-2.5object-contain float-right h-[42px] w-[131px]"
            />
          </div>
          <div className="mb-10 min-h-[76px] w-auto whitespace-normal text-justify text-base font-thin text-white xs:w-[unset] xs:whitespace-pre-line xs:text-xl xl:w-[45%] xl:text-base">
            {descr}
          </div>
          <div className="relative z-10 ml-2.5 hidden h-[3.3rem] w-36 cursor-pointer items-center rounded-xl bg-[#66656580] px-2.5 py-[5px] text-center align-middle text-white shadow-sm backdrop-blur-[5px] xs:flex ">
            <Image
              src={ExclamationMark}
              alt="ExclamationMark"
              className="mx-[5px] my-auto h-[1.1rem] w-auto "
            />
            <h3 className="block select-text text-base font-bold leading-[10px] text-white">
              اطلاعات بیشتر
            </h3>
          </div>
          <div className="absolute inset-y-0 right-0 grid h-[430px] w-full overflow-hidden xs:h-full"></div>
        </div>
      </div>
    </Link>
  );
};

export default Slidermovie;
