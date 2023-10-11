import Slidermovies from "../../../components/homeSlider/Slidermovies";
import { tmdbOptions } from "@/lib";

async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?language=fa`,
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

const SeriesPage = async () => {
  const data = await getData();
  const results = data.results;

  return (
    <main className="relative flex flex-col opacity-100">
      <div className="">
        <Slidermovies slidersDate={results} />
      </div>
    </main>
  );
};

export default SeriesPage;
