/* eslint-disable @next/next/no-img-element */
"use client";
import { TVShow } from "@/types/TV-show";
import { Movie } from "@/types/Movie";
import { useState, useEffect, useContext } from "react";
import { MediaContext } from "@/contexts/Media";

export default function DiscoverDashboard() {
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";
  const [discoverMovie, setDiscoverMovie] = useState<Movie[]>([]);
  const [discoverTV, setDiscoverTV] = useState<TVShow[]>([]);
  const { setSelectedMedia } = useContext(MediaContext);

  const fetchDiscoverMovie = async () => {
    try {
      const res = await fetch(`/api/movie/discover`);
      const data = await res.json();
      setDiscoverMovie(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchDiscoverTV = async () => {
    try {
      const res = await fetch(`/api/tv/discover`);
      const data = await res.json();
      setDiscoverTV(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleClick = (media: Movie | TVShow) => {
    setSelectedMedia && setSelectedMedia(media);
  };

  useEffect(() => {
    (async () => {
      fetchDiscoverMovie();
      fetchDiscoverTV();
    })();
  }, []);

  return (
    <div className="discover">
      <h1>Discover</h1>
      <ul>
        {discoverMovie.map((movie, index) => (
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
        {discoverTV.map((movie, index) => (
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
      </ul>
    </div>
  );
}
