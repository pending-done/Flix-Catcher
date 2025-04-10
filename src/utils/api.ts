import axios from "axios";
import { BASE_API_URL, LANGUAGE_CODE } from "./constants";

const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: BASE_API_URL,
  params: {
    api_key: API_KEY,
    // language: LANGUAGE_CODE.ko,
    language: "ko-KR",
  },
});

export default api;
