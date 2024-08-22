import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";
import { fetchMovie } from "../../../../lib/fetchMovie";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const { title } = await req.json();

    if (!title) {
      return NextResponse.json(
        { message: "Movie Title is required" },
        { status: 400 }
      );
    }

    const movieData = await fetchMovie(title);

    if (!movieData || movieData.Response == "False") {
      return NextResponse.json(
        { message: "Movie not found in OMDB" },
        { status: 404 }
      );
    }

    const newMovie = await prisma.movie.create({
      data: {
        // title: movieData.Title,
        // year: movieData.Year,
        // genre: movieData.Genre,
        // plot: movieData.Plot,
        // poster: movieData.Poster,
        // imdbRating: movieData.imdbRating,
      },
    });

    return NextResponse.json(
      { data: newMovie, message: "Movie added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while adding the movie" },
      { status: 500 }
    );
  }
};
