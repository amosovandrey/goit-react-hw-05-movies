import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import defaultPoster from '../../../src/default-movie.png';

import {
  fetchMovieDetailes,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from 'services/tmdbAPI';
import { formatDate } from 'services/formattedDate';
import {
  Wrapper,
  MovieWrapper,
  MovieTitle,
  MovieImage,
  MovieDesc,
  MovieItem,
  DetailsList,
  DetailsListItem,
  DetailsWrapper,
  Container,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  transition: var(--transition);
  &.active {
    text-transform: uppercase;
    color: var(--color-accent);
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
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
    <Wrapper>
      {isLoading && <Loader />}
      <StyledLink to={backLinkLocationRef.current}>Go Back</StyledLink>
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
              {movie.poster_path ? (
                <MovieImage
                  src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`}
                  alt={`poster for the ${movie.title}`}
                />
              ) : (
                <MovieImage src={defaultPoster} alt="default movie poster" />
              )}

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
    </Wrapper>
  );
};

export default MovieDetails;
