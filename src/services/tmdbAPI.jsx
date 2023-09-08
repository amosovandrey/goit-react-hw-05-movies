import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmQzNWNhYzIzYTUxOTJlMDk1YzE2Nzc1M2FmOThhNiIsInN1YiI6IjY0ZTVmZThlMDZmOTg0MDBjYTU0MjE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7OuMFL6f89_fpCCuHFLr8CmGeb-swzyNgMKzdptnTKQ';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMAGE_SIZE = 'w500';

export const fetchTrendingMovies = async () => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/trending/all/day`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  return await axios.request(options);
};

export const fetchMovieDetailes = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  return await axios.request(options);
};

export const fetchMovieCast = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  return await axios.request(options);
};

export const fetchMovieReviews = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  return await axios.request(options);
};
