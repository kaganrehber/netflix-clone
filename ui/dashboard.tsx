/* eslint-disable @next/next/no-img-element */
"use client";
import "./styles/dashboard.css";
import HeaderDashboard from "./header-dashboard";
import { useEffect, useState } from "react";
import { Movie } from "@/types/Movie";

export default function Dashboard() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";

  const fetchPopular = async (page: number = 1) => {
    try {
      const res = await fetch(`/api/popular/${page}`);
      const data = await res.json();
      setPopularMovies(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleGetMovie = async (page: number) => {
    await fetchPopular(page);
  };

  useEffect(() => {
    (async () => await fetchPopular())();
  }, []);

  return (
    <div className="page">
      <HeaderDashboard />
      <div className="movies">
        <div className="popular">
          <h1>Popular Movies</h1>
          <ul>
            {popularMovies.map((movie, index) => (
              <li key={index}>
                <div className="movie-poster">
                  <img
                    src={`${baseURL}${size}${movie.poster_path}`}
                    alt="poster"
                    id="poster"
                  />
                  <label htmlFor="poster">{movie.title}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
