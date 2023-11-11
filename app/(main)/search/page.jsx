"use client";
import { FilterSearch, Movie, SearchHeader } from "@/components";
import { tmdbOptions } from "@/lib";
import { useEffect, useState } from "react";

const searchTabs = [
  {
    id: 1,
    title: "همه",
  },
  {
    id: 2,
    title: "فیلم ها",
  },
  {
    id: 3,
    title: "سریال ها",
  },
  {
    id: 4,
    title: "عوامل",
  },
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [series, setSeries] = useState([]);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setSeries([]);
    setMovies([]);
    setPeople([]);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=fa&page=1`,
      tmdbOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchMovies(data.results.slice(0, 10));
      });
  }, [searchParams]);

  const handleClicksAll = () => {
    setIsActive(1);
    setSearchMovies([]);
    setSeries([]);
    setMovies([]);
    setPeople([]);

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=faS&page=1",
      tmdbOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setShows(data.results);
      });
  };

  const handleMoviesClick = () => {
    setIsActive(2);
    setSearchMovies([]);
    setSeries([]);
    setPeople([]);
    setShows([]);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=fa&page=1",
      tmdbOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const handleSeriesClick = () => {
    setIsActive(3);
    setSearchMovies([]);
    setPeople([]);
    setMovies([]);
    setShows([]);
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=fa&page=1",
      tmdbOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
      });
  };

  const handlePeople = () => {
    setIsActive(4);
    setSearchMovies([]);
    setSeries([]);
    setMovies([]);
    setShows([]);

    fetch(
      "https://api.themoviedb.org/3/person/popular?language=fa&page=1",
      tmdbOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      });
  };

  const { name, profile_path } = people;
  const myImg = `https://image.tmdb.org/t/p/original/${profile_path}`;

  return (
    <article className="mb-5 mt-20 flex min-h-screen w-screen flex-col items-center justify-start text-white md:mb-0">
      <SearchHeader
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="flex w-screen">
        <FilterSearch />
        <div className="mx-[30px] inline-block w-full md:w-[calc(100%_-_380px)]">
          <section className="relative mb-2 mt-8 flex w-full flex-row flex-wrap items-center justify-start md:flex-nowrap">
            <div
              onClick={handleClicksAll}
              className={`${
                isActive === 1 ? "border-b-[3px] border-b-[#f90000] " : ""
              }
                -mb-0.5 
                 px-4 py-2 md:px-8 md:py-2`}
            >
              همه
            </div>
            <div
              onClick={handleMoviesClick}
              className={`${
                isActive === 2 ? "border-b-[3px] border-b-[#f90000] " : ""
              }
                -mb-0.5  
              px-4 py-2 md:px-8 md:py-2`}
            >
              فیلم ها
            </div>
            <div
              onClick={handleSeriesClick}
              className={`${
                isActive === 3 ? "border-b-[3px] border-b-[#f90000] " : ""
              }
                -mb-0.5 
                 px-4 py-2 md:px-8 md:py-2`}
            >
              سریال ها
            </div>
            <div
              onClick={handlePeople}
              className={`${
                isActive === 4 ? "border-b-[3px] border-b-[#f90000] " : ""
              }
                -mb-0.5 
                 px-4 py-2 md:px-8 md:py-2`}
            >
              عوامل
            </div>
          </section>

          {/* movies start here */}
          <section className="flex w-full flex-col items-center justify-center">
            <article className="flex min-h-screen w-full flex-col items-start justify-start text-white">
              <section className="relative flex w-full flex-wrap">
                {/* movies */}
                {searchMovies.map((movie) => (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    id={movie?.id}
                    img={movie.poster_path}
                    isSeries={movie?.first_air_date !== undefined}
                  />
                ))}
                {series.map((movie) => (
                  <Movie
                    key={movie.id}
                    title={movie.name}
                    release_date={movie.first_air_date}
                    img={movie.poster_path}
                    isSeries={movie?.first_air_date !== undefined}
                    id={movie?.id}
                  />
                ))}
                {movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    img={movie.poster_path}
                    isSeries={movie?.first_air_date !== undefined}
                    id={movie?.id}
                  />
                ))}
                {shows.map((movie) => (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    img={movie.poster_path}
                    isSeries={movie?.first_air_date !== undefined}
                    id={movie?.id}
                  />
                ))}
              </section>

              <section className="relative flex flex-row flex-wrap md:px-7">
                {people.map((person) => (
                  <div key={person.id} className="block align-middle">
                    <div className="m-[21px] flex justify-start overflow-hidden rounded-lg">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                        className="m-2 h-[110px] w-[100px] rounded-[30%] md:h-[117px] md:w-[117px]"
                      />
                    </div>
                    <div className="block cursor-pointer select-text text-center align-middle text-xs">
                      {person.name}
                    </div>
                  </div>
                ))}
              </section>
            </article>
          </section>
        </div>
      </div>
    </article>
  );
};

export default SearchPage;
