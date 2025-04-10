export const BASE_API_URL = "https://api.themoviedb.org/3/";

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

// 장르 목록
export const GENRE_URL = "/genre/movie/list";
// 인기순
export const POPULAR_URL = "/movie/popular";

export const ORIGIN_COUNTRY_CODE = {
  US: "미국",
  JP: "일본",
  KR: "한국",
  UK: "영국",
};

export const MOVIE_CATEGORY_MAP = {
  popular: {
    name: "인기 영화",
    endPoint: "/movie/popular",
  },
  nowPlaying: {
    name: "현재 상영작",
    endPoint: "/movie/now_playing",
  },
  upcoming: {
    name: "개봉 예정작",
    endPoint: "/movie/upcoming",
  },
  topRated: {
    name: "명작 영화",
    endPoint: "/movie/top_rated",
  },
  latest: {
    name: "최근 본 영화",
    endPoint: "/movie/latest",
  },
};

export const LANGUAGE_CODE = {
  ko: "ko-KR",
};
