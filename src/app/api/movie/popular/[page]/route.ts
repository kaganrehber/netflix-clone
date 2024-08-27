import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = "https://api.themoviedb.org/3/movie/popular";

export const GET = async (
  request: NextRequest,
  context: { params: { page: number } }
) => {
  const { params } = context;

  try {
    const response = await axios.get(TMDB_API_URL, {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
        page: params.page,
      },
    });

    const movies = response.data.results;

    return NextResponse.json(
      { data: movies, message: "Movies fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json(
      { message: "Failed to fetch movies" },
      { status: 500 }
    );
  }
};
