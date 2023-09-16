import React, { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Title } from './Home.styled';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTrendingMovies()
      .then(function (response) {
        setIsLoading(true);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        setError(error);
        console.error(error);
      })
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Trending Today</Title>
      {isLoading && <Loader />}
      {error && <h2> Oops!.. Something goes wrong</h2>}
      <MoviesList movies={movies} />
    </Wrapper>
  );
};

export default Home;
