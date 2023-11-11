import ShowDetails from "@/components/ShowDetails";
import { tmdbOptions } from "@/lib";

const moviePage = async ({ params }: any) => {
  const id = params.movie;
  async function getData() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=1&language=fa`,
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
    title,
    original_title: originalTitle,
    backdrop_path: backdropPath,
    overview,
    genres,
    production_countries: productionCountries,
    release_date: releaseDate,
    vote_average: voteAverage,
  } = result;

  return (
    <ShowDetails
      backgroundImage={backdropPath}
      persianTitle={title}
      englishTitle={originalTitle}
      genres={genres}
      madeIn={productionCountries}
      release={releaseDate}
      desc={overview}
      averageVote={voteAverage}
      isSeries={false}
    />
  );
};

export default moviePage;
