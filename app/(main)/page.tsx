// import components
import {
  MoviesCategory,
  Sliders,
  TheBroadcasts,
  Banners,
  Exclusive,
  MiniBanners,
  Exclusives,
} from "@/components";

import {
  bannerGroup2,
  bannerGroup1,
  bannerGroup3,
  bannerGroup4,
  bannerGroup5,
  bannerGroup6,
  bannerGroup7,
  bannerGroup8,
} from "@/constants/banners";

import {
  miniBanners1,
  persianActors,
  goldens,
  collections,
} from "@/constants/miniBanners";
import { HomeslidersDate } from "@/constants/Slider";

const HomePage = () => {
  return (
    <main className="relative  flex flex-col opacity-100">
      <Sliders slidersDate={HomeslidersDate} />

      <MoviesCategory
        apiPath={"/3/trending/movie/day?language=fa"}
        movieCategoryTitle={"ترند"}
        movieCatBtntitle={"مشاهده همه"}
        isButtonDisable={false}
      />
      <MoviesCategory
        apiPath={"/3/movie/top_rated?language=fa&page=1"}
        movieCategoryTitle={"تازه های تماشاخانه"}
      />
      <TheBroadcasts />

      <MiniBanners dataItems={miniBanners1} />
      <Banners bannersData={bannerGroup1} />
      <MoviesCategory
        apiPath={
          "/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fa&page=1&sort_by=popularity.desc&with_original_language=fa"
        }
        movieCategoryTitle={"سریال های ایرانی"}
      />
      <MiniBanners dataItems={persianActors} />
      <Exclusives />

      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&primary_release_year=2023&sort_by=popularity.desc"
        }
        movieCategoryTitle={"2023"}
      />
      <MoviesCategory
        movieCategoryTitle={"سریال های بروز شده"}
        apiPath={"/3/trending/tv/day?language=fa"}
      />
      <MoviesCategory
        apiPath={"/3/movie/top_rated?language=fa&page=1"}
        movieCategoryTitle={"پیشنهاد تماشاخانه"}
      />
      <Banners bannersData={bannerGroup2} />
      <MiniBanners dataItems={collections} />
      <Banners bannersData={bannerGroup4} />

      <MoviesCategory
        apiPath={"/3/movie/popular?language=en-US&page=1"}
        movieCategoryTitle={"پربازدیدترین"}
        isButtonDisable={false}
      />

      <Banners bannersData={bannerGroup8} />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc"
        }
        movieCategoryTitle={"همه فیلم‌ها"}
      />
      <MoviesCategory
        apiPath={"/3/tv/top_rated?language=fa&page=1"}
        movieCategoryTitle={"همه سریال‌ها"}
      />
    </main>
  );
};

export default HomePage;
