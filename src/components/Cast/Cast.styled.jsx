import { styled } from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: flex-start;
  gap: 8px;
  min-width: 296px;
`;

export const CastListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
`;

export const CastListItemImage = styled.img`
  width: 32px;
  height: 48px;
  border-radius: 4px;
`;
