/* eslint-disable @next/next/no-img-element */
"use client";
import { Movie } from "@/types/Movie";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import "./styles/dashboard.css";
import { MediaContext } from "@/contexts/Media";

export default function TopRatedMovieDashboard() {
  const { setSelectedMedia } = useContext(MediaContext);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";

  const fetchTopRatedMovie = async (page: number = 1) => {
    try {
      const res = await fetch(`/api/movie/top-rated/${page}`);
      const data = await res.json();
      setTopRatedMovies(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleClick = (media: Movie) => {
    setSelectedMedia && setSelectedMedia(media);
  };

  useEffect(() => {
    (async () => {
      await fetchTopRatedMovie();
    })();
  }, []);

  return (
    <div className="popular">
      <h1>Top Rated Movies</h1>
      <ul>
        {topRatedMovies.map((movie, index) => (
          <li key={index} onClick={() => handleClick(movie)}>
            <div className="movie-poster">
              <img
                src={`${baseURL}${size}${movie.poster_path}`}
                alt="poster"
                id="poster"
              />
              {/* <label htmlFor="poster">{movie.title}</label> */}
            </div>
          </li>
        ))}
        <Link href="/popular-movies">
          <div className="see-more">
            <img src="/right.png" alt="rigth arrow" />
          </div>
        </Link>
      </ul>
    </div>
  );
}
