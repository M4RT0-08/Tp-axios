import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = '4a40debd';

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchMovies = (query) => {
  return api.get('', {
    params: {
      apikey: API_KEY,
      s: query,
      type: 'movie',
      page: 1,
    }
  });
};

export const getPopularMovies = () => {
  return api.get('', {
    params: {
      apikey: API_KEY,
      s: 'movie',
      type: 'movie',
    }
  });
};

export const getMovieDetails = (movieId) => {
  return api.get('', {
    params: {
      apikey: API_KEY,
      i: movieId,
      plot: 'full',
    }
  });
};

export default api;