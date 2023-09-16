import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  width: 200px;
  border-style: double;
  border-width: 2px;
  border-color: var(--color-bg);
  outline: none;
  background-color: var(--color-txt);
  color: var(--color-black);
  font-size: 14px;
  letter-spacing: 0.05rem;
  transition: var(--transition);
  &:focus {
    border-color: var(--color-accent);
  }

  &:hover {
    border-color: var(--color-accent);
  }
`;

export const SearchButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  width: 80px;
  border-style: double;
  border-width: 2px;
  border-color: var(--color-bg);
  outline: none;
  background-color: var(--color-bg);
  color: var(--color-txt-2);
  font-size: 14px;
  letter-spacing: 0.05rem;
  text-transform: capitalize;
  transition: var(--transition);

  &:focus {
    border-color: var(--color-accent);
    background-color: var(--color-txt-2);
    color: var(--color-bg);
  }

  &:hover {
    border-color: var(--color-accent);
    background-color: var(--color-txt-2);
    color: var(--color-bg);
  }
`;
