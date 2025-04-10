import Header from "./components/Header";
import MovieList from "./components/MovieList";
import useGenres from "../hooks/useGenres";
import useMovieList from "../hooks/useMovieList";
import { LANGUAGE_CODE, MOVIE_CATEGORY_MAP } from "../utils/constants";

const Home = () => {
  const { selectedGenreIds, genreList, genreLoading, handleGenreToggle } =
    useGenres();

  const endPoint = MOVIE_CATEGORY_MAP.popular.endPoint;
  const country = LANGUAGE_CODE.ko;

  const { movieList, movieListLoading, movieListError } = useMovieList({
    endPoint,
    country,
    selectedGenreIds,
  });

  return (
    <div className="Home">
      <div className="header-wrapper">
        <Header
          genreLoading={genreLoading}
          genreList={genreList}
          handleGenreToggle={handleGenreToggle}
          selectedGenreIds={selectedGenreIds}
        ></Header>
      </div>
      <div className="movie-list-wrapper">
        <MovieList
          movieList={movieList}
          movieListLoading={movieListLoading}
        ></MovieList>
      </div>
    </div>
  );
};

export default Home;
