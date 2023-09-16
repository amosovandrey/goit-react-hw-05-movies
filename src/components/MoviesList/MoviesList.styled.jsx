import { styled } from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  display: grid;
  justify-items: center;

  justify-content: center;
  align-content: center;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 540px;
  grid-gap: 24px;
  padding: 48px;
  list-style: none;
  box-shadow: 0 0.1rem 0 0 rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  max-width: 300px;
  height: 500px;
  margin: 0 auto;
  cursor: pointer;
  filter: grayscale(40%);
  transition: var(--transition);

  &:hover {
    filter: none;

    transform: scale(1.06);
  }
`;

export const ListItemImage = styled.img`
  width: 300px;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 15px 0px;
`;

export const ListItemText = styled.p`
  color: var(--color-text);
  text-align: center;
  transition: color, var(--transition);

  ${ListItem}:hover & {
    color: var(--color-txt-2);
  }
`;
