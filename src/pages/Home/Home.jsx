import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import {
  fetchTrendingMovies,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
} from 'services/tmdbAPI';
import {
  List,
  Wrapper,
  ListItem,
  ListItemText,
  ListItemImage,
  Title,
} from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  &.active {
    color: var(--color-accent);
  }
`;

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTrendingMovies()
      .then(function (response) {
        setIsLoading(true);
        setMovies(response.data.results);
      })
      .catch(function (error) {
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
      {isLoading && <Loader />}
      <Title>Trending Today</Title>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink to={`movie/${movie.id}`} state={{ from: location }}>
              <ListItemImage
                src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`}
                alt={movie.title}
              />
              <ListItemText> {movie.title}</ListItemText>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Home;
