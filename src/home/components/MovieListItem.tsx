import React from "react";
import { Movie } from "../../types/Movie";
import "./MovieListItem.scss";
type Props = {
  movie: Movie;
};

const MovieListItem = ({ movie }: Props) => {
  return (
    <div className="MovieListItem">
      <div className="img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="content-wrapper">
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieListItem;
