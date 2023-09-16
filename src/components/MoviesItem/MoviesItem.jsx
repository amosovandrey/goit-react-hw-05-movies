import { useParams, Outlet, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import defaultPoster from '../../../src/default-movie.png';
import { Loader } from 'components/Loader/Loader';

import {
  fetchMovieDetailes,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from 'services/tmdbAPI';
import { formatDate } from 'services/formattedDate';
import {
  MovieWrapper,
  MovieTitle,
  MovieImage,
  MovieDesc,
  MovieItem,
  DetailsList,
  DetailsListItem,
  DetailsWrapper,
  Container,
} from './MoviesItem.styled';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  transition: var(--transition);
  &.active {
    text-transform: uppercase;
    color: var(--color-accent);
  }
`;

const MoviesItem = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieDetailes(movieId)
      .then(function (response) {
        setIsLoading(true);
        setMovie(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setError(error);
      })
      .finally(function () {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      });
  }, [movieId]);

  const formattedDate = formatDate(movie.release_date);
  return (
    <>
      {isLoading && <Loader />}{' '}
      {error ? (
        <h2>Oops!.. Sorry, there are no details about this movie 😔</h2>
      ) : (
        <Container>
          <MovieWrapper>
            {movie.title ? (
              <MovieTitle>{movie.title}</MovieTitle>
            ) : (
              <MovieTitle>{` `}</MovieTitle>
            )}
            <MovieItem>
              <MovieImage
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`
                    : defaultPoster
                }
                alt={`poster for the ${movie.title}`}
              />

              <MovieDesc>
                <p>{movie.overview}</p>
                <p>Released: {formattedDate}</p>
              </MovieDesc>
            </MovieItem>
          </MovieWrapper>
          <DetailsWrapper>
            <DetailsList>
              <DetailsListItem>
                <StyledLink to="cast">Cast</StyledLink>
              </DetailsListItem>
              <DetailsListItem>
                <StyledLink to="reviews">Reviews</StyledLink>
              </DetailsListItem>
            </DetailsList>
          </DetailsWrapper>
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default MoviesItem;
