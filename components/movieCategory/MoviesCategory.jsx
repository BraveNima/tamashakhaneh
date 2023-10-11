import { MovieCategoryHeader, MovieItems } from "..";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ2ZWE4OTkzNDIyMGNjYjRmMzk1YjExNzViODkwMSIsInN1YiI6IjY0Zjk1YzM0ZTBjYTdmMDEyZWI1ZWE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qRxxW0PYUzjeTwMUT1bR_PJN633f1vbsh67EVkwcD9g",
  },
};

// const TrendMoviesProps = {
//   apiPath: string,
//   movieCategoryTitle: string,
//   movieCatBtntitle: string,
//   isButtonDisable: string,
// };

const TrendMovies = async ({
  apiPath,
  movieCategoryTitle,
  movieCatBtntitle = "مشاهده همه",
  isButtonDisable = false,
}) => {
  async function getData() {
    const res = await fetch(`https://api.themoviedb.org${apiPath}`, options);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await getData();
  const results = data.results.slice(0, 10);

  return (
    <>
      <article>
        <section className="relative flex flex-col justify-start md:pr-[15px]">
          <MovieCategoryHeader
            movieCatTitle={movieCategoryTitle}
            movieCatBtntitle={movieCatBtntitle}
            isButtonDisable={isButtonDisable}
            isMargintop={true}
          />

          <MovieItems results={results} />
        </section>
      </article>
    </>
  );
};

export default TrendMovies;
