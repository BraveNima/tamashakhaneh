import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsPlayCircleFill,
} from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  ReactPortal,
} from "react";

type ShowDetailsProps = {
  backgroundImage: string;
  persianTitle: string;
  englishTitle: string;
  genres: any;
  madeIn: any;
  release: string;
  desc: string;
  averageVote: string;
  isSeries: boolean;
};

const ShowDetails = ({
  backgroundImage,
  persianTitle,
  englishTitle,
  genres,
  madeIn,
  release,
  desc,
  averageVote,
  isSeries,
}: ShowDetailsProps) => {
  const type = isSeries ? "سریال" : "فیلم";
  return (
    <article className="min-h-screen text-white">
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 45vw, rgb(23, 28, 36) 80vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
        }}
        className="movies-mobile-bg relative mb-0 h-[900px] w-full bg-contain bg-no-repeat shadow-md md:bg-cover"
      >
        <div className="inset-0 flex w-full flex-col pb-0 pt-[15px] text-right text-xs md:pb-0 md:pt-8 md:text-right mdl:flex-row mdl:text-center">
          <div className="float-right w-full px-8 text-white xs:p-8 md:px-8 md:py-0 xxl:w-full xxl:px-8">
            <div className="z-10 mb-[-40px] block h-[168px] w-[168px] drop-shadow-sm xs:w-[25rem] md:h-[252px] md:w-[252px] xl:my-[-50px]" />
            <h1 className="ml-2.5 block select-text text-right text-[15px] font-normal text-white md:text-2xl md:font-bold">
              {persianTitle}
            </h1>
            <h1 className="z-10 mb-5 mt-3 block select-text text-right text-[15px] font-thin text-white xs:text-lg">
              {englishTitle}
            </h1>
            <div className="mb-[14px] mt-8 hidden text-[10px] font-normal md:justify-start md:text-sm mdl:flex ">
              <div className="bottom-0 ml-2.5 h-[25px] w-max rounded-[4px] bg-[#ffffff29] px-2.5 py-[5px] align-middle text-sm font-thin text-white xl:right-8 xxl:block xxl:text-base">
                <div className="mb-4 flex items-center justify-center text-xs font-thin md:justify-start">
                  {genres.map(
                    (genre: {
                      id: Key | null | undefined;
                      name:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | PromiseLikeOfReactNode
                        | null
                        | undefined;
                    }) => (
                      <Link
                        key={genre.id}
                        href="#"
                        className="mr-1 text-xs visited:text-[unset] lg:text-sm"
                      >
                        {genre.name}
                      </Link>
                    ),
                  )}
                </div>
              </div>
              <div className="bottom-0 ml-2.5 flex h-[25px] w-max items-center justify-center rounded-[4px] bg-[#ffffff29] px-2.5 py-[5px] text-center align-middle text-sm font-thin text-white xl:right-8 xxl:block xxl:text-base">
                <Link
                  href="#"
                  className=" flex items-center justify-center text-xs visited:text-[unset] lg:text-sm "
                >
                  {release.slice(0, 4)}
                </Link>
              </div>
              <div className="bottom-0 ml-2.5 flex h-[25px] w-max items-center justify-center gap-2 rounded-[4px] bg-[#ffffff29] px-2.5 py-[5px] text-center align-middle text-sm font-thin text-white xl:right-8 xxl:text-base">
                {madeIn.map(
                  (
                    item: {
                      name:
                        | boolean
                        | Key
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    idx: Key,
                  ) => (
                    <Link
                      key={idx}
                      href="#"
                      className=" flex items-center justify-center text-xs visited:text-[unset] lg:text-sm "
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>
            <div className="mb-5 w-auto select-text text-ellipsis whitespace-pre-wrap text-justify align-middle text-sm  font-light leading-[1.6rem] text-[#dbdbdb] xs:w-[40rem] xs:text-[1.2rem] xs:font-normal xxl:text-base xxl:font-light">
              {desc}
            </div>
            <div className="block w-2/4 items-center justify-center">
              <div className="relative mt-2.5 flex w-max min-w-[50px] items-center justify-center align-middle text-xs font-light text-white mdl:text-base">
                <MdOutlineDangerous className="ml-[5px] h-4 w-4 fill-yellow-500" />
                ممکن است تماشای این محتوا بدون نظارت والدین برای کودکان مناسب
                نباشد.
              </div>
              <div className="relative mt-2.5 flex w-max min-w-[50px] items-center justify-center align-middle text-xs font-light text-white mdl:text-base">
                <AiTwotoneLike className="ml-[5px] h-4 w-4 fill-yellow-500" />
                نمره میانگین این {type} {averageVote} است
              </div>
            </div>
            <div className="relative my-8 flex flex-wrap  md:z-40 md:max-w-[inset] md:flex-[unset] md:text-[unset]">
              <button className="playBtn">
                <BsPlayCircleFill className="h-6 w-6 fill-yellow-500" />
                <h3>پخش آنلاین</h3>
              </button>
            </div>
            <div className="flex">
              <div className="flex min-h-[20%] items-center justify-between pr-4 first:p-0">
                <div className="pl-4">
                  <CiSaveDown2 className="h-[25px] w-[30px] fill-slate-50" />
                </div>
                <div className="flex items-center justify-between gap-2">
                  <BsHandThumbsUp className="h-[25px] w-[30px] fill-slate-50" />
                  <BsHandThumbsDown className="h-[25px] w-[30px] fill-slate-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ShowDetails;
