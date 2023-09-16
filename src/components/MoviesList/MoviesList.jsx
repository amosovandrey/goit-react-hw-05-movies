import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import { IMAGE_BASE_URL, IMAGE_SIZE } from 'services/tmdbAPI';

import {
  List,
  ListItem,
  ListItemText,
  ListItemImage,
} from './MoviesList.styled';

import defaultPoster from '../../../src/default-movie.png';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  &.active {
    color: var(--color-accent);
  }
`;

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <StyledLink to={`/movie/${movie.id}`} state={{ from: location }}>
            <ListItemImage
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
              width={300}
            />

            <ListItemText>
              {movie.title ? movie.title : movie.original_name}
            </ListItemText>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};
export default MoviesList;
