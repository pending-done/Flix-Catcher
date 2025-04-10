export type Movie = {
  adult: boolean; // 성인여부
  backdrop_path: string; // 배경(가로) 이미지 경로
  genre_ids: number[]; // 장르
  id: number; // id
  original_language: string; // 원어
  original_title: string; // 원 제목
  overview: string; // 줄거리
  popularity: number; // 인기?
  poster_path: string; // 포스터(세로) 이미지 경로
  release_date: string; // 날짜 문자열
  title: string; // 제목
  video: boolean; // 비디오 여부
  vote_average: number; // 평점
  vote_count: number; // 추천
};
