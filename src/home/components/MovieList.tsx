import { Movie } from "../../types/Movie";
import MovieListItem from "./MovieListItem";
import "./MovieList.scss";

type Props = {
  movieList: Movie[];
  movieListLoading: boolean;
};

const MovieList = ({ movieList, movieListLoading }: Props) => {
  if (movieListLoading)
    return <div className="MovieList">영화 불러오는중 . . .</div>;

  return (
    <div className="MovieList">
      {movieList.map((movie) => (
        <MovieListItem key={movie.id} movie={movie}></MovieListItem>
      ))}
    </div>
  );
};

export default MovieList;
