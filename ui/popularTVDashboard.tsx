/* eslint-disable @next/next/no-img-element */
"use client";
import { TVShow } from "@/types/TV-show";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import "./styles/dashboard.css";
import { MediaContext } from "@/contexts/Media";

export default function PopularTVDashboard() {
  const { setSelectedMedia } = useContext(MediaContext);
  const [popularTV, setPopularTV] = useState<TVShow[]>([]);
  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";

  const fetchPopularTV = async (page: number = 1) => {
    try {
      const res = await fetch(`/api/tv/popular/${page}`);
      const data = await res.json();
      setPopularTV(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleClick = (media: TVShow) => {
    setSelectedMedia && setSelectedMedia(media);
  };

  useEffect(() => {
    (async () => {
      await fetchPopularTV();
    })();
  }, []);

  return (
    <div className="popular">
      <h1>Popular TV Shows</h1>
      <ul>
        {popularTV.map((movie, index) => (
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
