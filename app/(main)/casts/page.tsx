"use client";
import { tmdbOptions } from "@/lib";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const CastPage = () => {
  const [people, setPeople] = useState([]);

  fetch(
    "https://api.themoviedb.org/3/person/popular?language=fa&page=1",
    tmdbOptions,
  )
    .then((res) => res.json())
    .then((data) => {
      setPeople(data.results);
    });

  return (
    <section className="relative mt-24 flex flex-row flex-wrap md:px-7">
      {people.map(
        (person: { profile_path: any; name: ReactNode; id: string }) => (
          <Link
            href={`/casts/${person.id}`}
            key={person.id}
            className="block align-middle"
          >
            <div className="m-[21px] flex justify-start overflow-hidden rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                className="m-2 h-[110px] w-[100px] rounded-[30%] md:h-[117px] md:w-[117px]"
                alt="person avatar"
              />
            </div>
            <div className="block cursor-pointer select-text text-center align-middle text-xs text-white">
              {person.name}
            </div>
          </Link>
        ),
      )}
    </section>
  );
};

export default CastPage;
