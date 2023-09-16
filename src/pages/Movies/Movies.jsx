import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/tmdbAPI';
import { useEffect, useState } from 'react';

import { Wrapper } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovieBySearch(query, page)
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
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });

    form.reset();
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} query={query} />
      <Wrapper>
        {isLoading && <Loader />}
        {error && <h2> Oops!.. Something goes wrong</h2>}
        {query && movies.length === 0 ? (
          <h2>{`Looks like there's no info about ${query}`}</h2>
        ) : (
          <MoviesList movies={movies} />
        )}
      </Wrapper>
    </div>
  );
};
export default Movies;
