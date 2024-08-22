import { PrismaClient } from "@prisma/client/extension";
import axios from "axios";

const prisma = new PrismaClient();
const API_KEY = process.env.OMDB_API_KEY;

export const fetchMovie = async (movieTitle: string) => {
  const url = `http://www.omdbapi.com/?t=${encodeURIComponent(
    movieTitle
  )}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url);

    if (response.data.Response == "True") {
      const movieData = response.data;

      const movie = await prisma.movie.create({
        data: {
          // title: movieData.Title,
          // year: movieData.Year,
          // genre: movieData.Genre,
          // poster: movieData.Poster,
          // director: movieData.Director,
          // plot: movieData.Plot,
          // imdbRating: parseFloat(movieData.imdbRating),
        },
      });

      return movie;
    } else {
      console.log("Movie not found", movieTitle);
    }
  } catch (error) {
    console.error("Error fetching movie from OMDb API:", error);
  }
};
