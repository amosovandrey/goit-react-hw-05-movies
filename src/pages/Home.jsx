import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {
  List,
  Wrapper,
  ListItem,
  ListItemText,
  ListItemImage,
  Title,
} from './Home.styled';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'w500';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  tex &.active {
    color: var(--color-accent);
  }
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/all/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmQzNWNhYzIzYTUxOTJlMDk1YzE2Nzc1M2FmOThhNiIsInN1YiI6IjY0ZTVmZThlMDZmOTg0MDBjYTU0MjE1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7OuMFL6f89_fpCCuHFLr8CmGeb-swzyNgMKzdptnTKQ',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Trending Today</Title>
      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <StyledLink to={`/${movie.id}`}>
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
