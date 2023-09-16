import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  width: 36px;
  height: 36px;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-accent);
  color: var(--color-black);
  border: none;
  border-radius: 50%;

  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--color-black);
    color: var(--color-accent);
  }
`;
