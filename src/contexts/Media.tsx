"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { Movie } from "@/types/Movie";
import { TVShow } from "@/types/TV-show";

type MediaContextProps<T> = {
  selectedMedia: Partial<T> | null;
  setSelectedMedia: React.Dispatch<React.SetStateAction<Partial<T>>>;
};

type PropviderProps = {
  children: React.ReactNode;
};

const MediaContext = createContext<Partial<MediaContextProps<any>>>({});

const MediaProvider = ({ children }: PropviderProps) => {
  // state
  const [selectedMedia, setSelectedMedia] = useState<Partial<Movie | TVShow>>(
    {}
  );

  return (
    <MediaContext.Provider value={{ selectedMedia, setSelectedMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export { MediaContext, MediaProvider };
