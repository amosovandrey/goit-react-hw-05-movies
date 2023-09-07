import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background: var(--color-bg);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 24px;
  gap: 24px;
  font-weight: 700;
  font-size: large;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
