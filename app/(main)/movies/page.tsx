import { MiniBanner, MiniBanners, MoviesCategory, Slider } from "@/components";
import Slidermovies from "../../../components/homeSlider/Slidermovies";
import { miniBanners1 } from "@/constants/miniBanners";
import { tmdbOptions } from "@/lib";

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc`,
    tmdbOptions,
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const moviesPage = async () => {
  const data = await getData();
  const results = data.results;

  return (
    <>
      <Slidermovies slidersDate={results} />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2023-09-01&release_date.lte=2023-10-01&sort_by=popularity.desc"
        }
        movieCategoryTitle={"تازه ترین فیلم ها"}
      />
      <MiniBanners dataItems={miniBanners1} />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2023-01-01&sort_by=popularity.desc"
        }
        movieCategoryTitle={"2023"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2022-02-01&release_date.lte=2022-12-30&sort_by=popularity.desc"
        }
        movieCategoryTitle={"2022فیلم"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2020-01-01&release_date.lte=2022-12-30&sort_by=popularity.desc"
        }
        movieCategoryTitle={"فیلم 2020-2021"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=2020-01-01&release_date.lte=2022-12-30&sort_by=popularity.desc"
        }
        movieCategoryTitle={"دوبله"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc&with_original_language=fa"
        }
        movieCategoryTitle={"فیلم ایرانی"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc&with_genres=16"
        }
        movieCategoryTitle={"فیلم انیمیشن"}
      />
      <MoviesCategory
        apiPath={
          "/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc&with_original_language=hi"
        }
        movieCategoryTitle={"هندی"}
      />
    </>
  );
};

export default moviesPage;
