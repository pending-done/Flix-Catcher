import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { GENRE_URL } from "../utils/constants";
import queryKey from "../utils/queryKey";
import { useState } from "react";

const fetchGenres = async () => {
  const res = await api.get(GENRE_URL);
  return res.data.genres;
};

const useGenres = () => {
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);
  const {
    data: genreList,
    isLoading: genreLoading,
    error: genreError,
  } = useQuery({
    queryKey: [queryKey.genre],
    queryFn: fetchGenres,
  });

  const handleGenreToggle = (genreId: number) => {
    if (selectedGenreIds.includes(genreId)) {
      setSelectedGenreIds(selectedGenreIds.filter((id) => id !== genreId));
    } else {
      setSelectedGenreIds([...selectedGenreIds, genreId]);
    }
  };

  return {
    selectedGenreIds,
    genreList,
    genreLoading,
    genreError,
    handleGenreToggle,
  };
};

export default useGenres;
