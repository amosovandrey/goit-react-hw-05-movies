import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Nav } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);
  text-decoration: none;
  transition: var(--transition);
  &.active {
    color: var(--color-accent);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
          <StyledLink to="/movies/:movieId/cast">Cast</StyledLink>
          <StyledLink to="/movies/:movieId/reviews">Reviews</StyledLink> */}
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
