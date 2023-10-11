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
    original_title,
    backdrop_path,
    overview,
    genres,
    production_countries,
    release_date,
    vote_average,
  } = result;

  return (
    <ShowDetails
      backgroundImage={backdrop_path}
      persianTitle={title}
      englishTitle={original_title}
      genres={genres}
      madeIn={production_countries}
      release={release_date}
      desc={overview}
      averageVote={vote_average}
      isSeries={false}
    />
  );
};

export default moviePage;
