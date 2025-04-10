import { Genre } from "../../types/Genre";
import "./Header.scss";

type Props = {
  genreList: Genre[];
  handleGenreToggle: (genreId: number) => void;
  selectedGenreIds: number[];
  genreLoading: boolean;
};

const Header = ({
  genreList,
  handleGenreToggle,
  selectedGenreIds,
  genreLoading,
}: Props) => {
  if (genreLoading) return <p>로딩 중...</p>;

  return (
    <div className="Header">
      <div className="logo-wrapper">
        <h1 className="logo">Flix Catcher</h1>
      </div>
      <div className="search-bar-wrapper">
        <input type="text" className="search-bar" />
      </div>
      <div className="genres-wrapper">
        {genreList.map((genre) => (
          <div
            key={genre.id}
            onClick={() => handleGenreToggle(genre.id)}
            className={`genre-box ${
              selectedGenreIds.includes(genre.id) ? "selected" : ""
            }`}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
