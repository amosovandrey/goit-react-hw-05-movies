import { useLocation, NavLink } from 'react-router-dom';
import React, { useRef } from 'react';
import styled from 'styled-components';

import { Wrapper } from './MovieDetails.styled';

import MoviesItem from 'components/MoviesItem/MoviesItem';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  transition: var(--transition);
  &.active {
    text-transform: uppercase;
    color: var(--color-accent);
  }

  &:hover {
    color: var(--color-accent);
    transform: scale(1.02);
  }
`;

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  return (
    <Wrapper>
      <StyledLink to={backLinkLocationRef.current}>Go Back</StyledLink>

      <MoviesItem />
    </Wrapper>
  );
};

export default MovieDetails;
