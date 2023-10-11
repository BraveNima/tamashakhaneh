import { tmdbOptions } from "@/lib";
import ShowDetails from "@/components/ShowDetails";

const SeriesPage = async ({ params }: any) => {
  const SeriesId = params.Series;

  async function getData() {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${SeriesId}?language=fa`,
      tmdbOptions,
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const result = await getData();
  const {
    backdrop_path,
    name,
    original_name,
    first_air_date,
    genres,
    production_countries,
    overView,
    vote_average,
  } = result;

  return (
    <ShowDetails
      backgroundImage={backdrop_path}
      persianTitle={name}
      englishTitle={original_name}
      genres={genres}
      madeIn={production_countries}
      release={first_air_date}
      desc={overView}
      averageVote={vote_average}
      isSeries={true}
    />
  );
};

export default SeriesPage;
