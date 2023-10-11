import Slidermovies from "../../../components/homeSlider/Slidermovies";
import { tmdbOptions } from "@/lib";

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fa&page=1&sort_by=popularity.desc&with_genres=16`,
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

const KidsPage = async () => {
  const data = await getData();
  const results = data.results;

  console.log(results);
  return (
    <div className="relative m-0 flex min-h-full flex-col overflow-hidden bg-primary bg-contain bg-fixed bg-center p-0">
      <main className="relative  h-fit min-h-screen max-w-[100vw]">
        <article className="bg-white">
          <Slidermovies slidersDate={results} />
        </article>
      </main>
    </div>
  );
};

export default KidsPage;
