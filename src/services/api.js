import axios from 'axios';

const API_KEY = 'e1aeaa11db3ac22382c707ccfcac931e';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return response.data;
}

export async function fetchMovieByID(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

  return response.data;
}

export async function fetchMovieReview(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

  return response.data;
}

export async function fetchMovieBySearchQuery(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data;
}

const api = {
  fetchTrendingMovies,
  fetchMovieByID,
  fetchMovieCast,
  fetchMovieReview,
  fetchMovieBySearchQuery,
};

export default api;
