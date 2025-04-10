import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import queryKey from "../utils/queryKey";

type Props = {
  endPoint: string;
  country: string;
  selectedGenreIds: number[];
};

const fetchMovieList = async ({
  endPoint,
  country,
  selectedGenreIds,
}: Props) => {
  let url = endPoint;
  let genres = "";

  if (selectedGenreIds && selectedGenreIds.length > 0) {
    genres =
      selectedGenreIds && selectedGenreIds.length > 0
        ? selectedGenreIds.join(",")
        : "";

    url = `/discover/movie`;
  }

  const params = {
    region: country, // 국가 코드
    with_genres: genres, // 장르 필터 (없으면 '')
  };

  try {
    const res = await api.get(`${url}`, { params }); // 엔드포인트 동적으로 처리
    return res.data.results;
  } catch (error) {
    console.error("API 요청 실패:", error);
    return [];
  }
};

const useMovieList = ({ endPoint, country, selectedGenreIds }: Props) => {
  const {
    data: movieList,
    isLoading: movieListLoading,
    isError: movieListError,
  } = useQuery({
    queryKey: [queryKey.movies, endPoint, country, selectedGenreIds],
    queryFn: () => fetchMovieList({ endPoint, country, selectedGenreIds }),
  });

  return {
    movieList,
    movieListLoading,
    movieListError,
  };
};

export default useMovieList;
