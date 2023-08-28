import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: var(--color-txt);

  &.active {
    color: var(--color-accent);
  }
`;

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
          <StyledLink to="/movies/:movieId/cast">Cast</StyledLink>
          <StyledLink to="/movies/:movieId/reviews">Reviews</StyledLink> */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
