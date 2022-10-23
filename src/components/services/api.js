import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '29563162ad0b73335f880d56505c78bf';

export const getTrendingMovies = async () => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get('/trending/movie/day', options);
  return response.data.results;
};

export const getMovieById = async movie_id => {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const response = await axios.get(`/movie/${movie_id}`, options);
  return response.data;
};

export const getCastById = async movie_id => {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const response = await axios.get(`/movie/${movie_id}/credits`, options);
  return response.data.cast;
};

export const getReviewsById = async movie_id => {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const response = await axios.get(`/movie/${movie_id}/reviews`, options);
  return response.data.results;
};

export const findFilms = async query => {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
    },
  };
  const response = await axios.get(`search/movie`, options);
  return response.data.results;
};

