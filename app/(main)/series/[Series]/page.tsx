import { tmdbOptions } from "@/lib";
import ShowDetails from "@/components/ShowDetails";

type seriesPageProps = {
  params: { Series: string };
};

const SeriesPage = async ({ params }: seriesPageProps) => {
  const SeriesId = params.Series;

  async function getData() {
    const res = await fetch(SeriesId, tmdbOptions);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const result = await getData();
  const {
    backdrop_path: backdropPath,
    name,
    original_name: originalName,
    first_air_date: firstAirDate,
    genres,
    production_countries: productionCountries,
    overView,
    vote_average: voteAverage,
  } = result;

  return (
    <ShowDetails
      backgroundImage={backdropPath}
      persianTitle={name}
      englishTitle={originalName}
      genres={genres}
      madeIn={productionCountries}
      release={firstAirDate}
      desc={overView}
      averageVote={voteAverage}
      isSeries={true}
    />
  );
};

export default SeriesPage;
