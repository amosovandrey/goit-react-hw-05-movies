import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import {
  fetchMovieBySearch,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from 'services/tmdbAPI';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { toast } from 'react-toastify';

import {
  List,
  Wrapper,
  ListItem,
  ListItemText,
  ListItemImage,
} from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  &.active {
    color: var(--color-accent);
  }
`;

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;
  const location = useLocation();
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoComplete="off" />
        <button type="submit">search</button>
      </form>
      <Wrapper>
        {isLoading && <Loader />}
        {error && <h2> Oops!.. Something goes wrong</h2>}

        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <StyledLink to={`/movie/${movie.id}`} state={{ from: location }}>
                <ListItemImage
                  src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`}
                  alt={movie.title}
                />
                {movie.title ? (
                  <ListItemText> {movie.title}</ListItemText>
                ) : (
                  <ListItemText> {movie.original_name}</ListItemText>
                )}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </div>
  );
};
export default Movies;