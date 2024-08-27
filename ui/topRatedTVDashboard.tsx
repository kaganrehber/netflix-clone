/* eslint-disable @next/next/no-img-element */
"use client";
import { TVShow } from "@/types/TV-show";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import "./styles/dashboard.css";
import { MediaContext } from "@/contexts/Media";

export default function TopRatedTVDashboard() {
  const { setSelectedMedia } = useContext(MediaContext);
  const [topRatedTV, setTopRatedTV] = useState<TVShow[]>([]);
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";

  const fetchTopRatedTV = async (page: number = 1) => {
    try {
      const res = await fetch(`/api/tv/top-rated/${page}`);
      const data = await res.json();
      setTopRatedTV(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleClick = (media: TVShow) => {
    setSelectedMedia && setSelectedMedia(media);
  };

  useEffect(() => {
    (async () => {
      await fetchTopRatedTV();
    })();
  }, []);

  return (
    <div className="top-rated">
      <h1>Top Rated TV Shows</h1>
      <ul>
        {topRatedTV.map((movie, index) => (
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

        <Link href="/top-rated-movies">
          <div className="see-more">
            <img src="/right.png" alt="rigth arrow" />
          </div>
        </Link>
      </ul>
    </div>
  );
}
