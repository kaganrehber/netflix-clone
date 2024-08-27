/* eslint-disable @next/next/no-img-element */
"use client";
import "./styles/dashboard.css";
import HeaderDashboard from "./header-dashboard";
import Link from "next/link";
import PopularMovieDashboard from "./popularMovieDashboard";
import TopRatedMovieDashboard from "./topRatedMovieDashboard";
import PopularTVDashboard from "./popularTVDashboard";
import TopRatedTVDashboard from "./topRatedTVDashboard";
import DiscoverDashboard from "./discoverDashboard";
import { useContext, useState } from "react";
import { MediaContext } from "@/contexts/Media";
import { Movie } from "@/types/Movie";

export default function Dashboard() {
  // const handleGetMovie = async (page: number) => {
  //   await fetchPopularMovie(page);
  // };

  const baseURL = "https://image.tmdb.org/t/p/";
  const size = "w200";
  const { selectedMedia, setSelectedMedia } = useContext(MediaContext);
  const emptyMedia: Movie = {
    id: 0,
    title: "",
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    adult: false,
  };

  const handleClick = () => {
    setSelectedMedia && setSelectedMedia(emptyMedia);
  };

  return (
    <div className="page">
      <HeaderDashboard />
      <div className="movies">
        <DiscoverDashboard />

        <PopularMovieDashboard />

        <TopRatedMovieDashboard />

        <PopularTVDashboard />

        <TopRatedTVDashboard />
      </div>

      {(selectedMedia?.name || selectedMedia?.title) && (
        <div className="popup-backdrop" onClick={handleClick}>
          <div className="popup">
            {selectedMedia.name ? (
              <div className="popup-details">
                <div className="title">
                  <h1>{selectedMedia.name}</h1>
                  <button onClick={handleClick} id="close-button">
                    <img
                      src="/Transparent_X.png"
                      alt="poster"
                      id="poster"
                      width={20}
                    />
                  </button>
                </div>
                <div className="details">
                  <img
                    src={`${baseURL}${size}${selectedMedia.poster_path}`}
                    alt="poster"
                    id="poster"
                  />
                  <div className="text-buttons">
                    <div className="description">
                      <p>{selectedMedia.overview}</p>
                    </div>
                    <div className="buttons">
                      <button id="watch-now">
                        <img
                          src="/play-button-arrowhead.png"
                          alt="poster"
                          id="poster"
                          width={20}
                        />
                        Watch Now
                      </button>
                      <button id="watch-list">
                        <img
                          src="/plus.png"
                          alt="poster"
                          id="poster"
                          width={40}
                        />
                      </button>
                    </div>
                    <div className="details">
                      <p>Original Name: {selectedMedia.original_name}</p>
                      <p>Air Date: {selectedMedia.first_air_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="popup-details">
                <div className="title">
                  <h1>{selectedMedia.title}</h1>
                  <button onClick={handleClick} id="close-button">
                    <img
                      src="/Transparent_X.png"
                      alt="poster"
                      id="poster"
                      width={20}
                    />
                  </button>
                </div>
                <div className="details">
                  <img
                    src={`${baseURL}${size}${selectedMedia.poster_path}`}
                    alt="poster"
                    id="poster"
                  />
                  <div className="text-buttons">
                    <div className="description">
                      <p>{selectedMedia.overview}</p>
                    </div>
                    <div className="buttons">
                      <button id="watch-now">
                        <img
                          src="/play-button-arrowhead.png"
                          alt="poster"
                          id="poster"
                          width={20}
                        />
                        Watch Now
                      </button>
                      <button id={"watch-list"}>
                        <img
                          src="/plus.png"
                          alt="poster"
                          id="poster"
                          width={40}
                        />
                      </button>
                    </div>
                    <div className="details">
                      <p>Original Name: {selectedMedia.original_title}</p>
                      <p>Air Date: {selectedMedia.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
