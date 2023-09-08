import { styled } from 'styled-components';

const breakpointTablet = '768px';
const breakpointDesktop = '1440px';

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: ${breakpointTablet}) {
    justify-content: flex-start;
    width: 720px;
  }

  @media screen and (min-width: ${breakpointDesktop}) {
    width: 1080px;
  }
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: flex-start;
  gap: 8px;
  min-width: 296px;

  @media screen and (min-width: ${breakpointTablet}) {
    margin: 0;
    /* flex-direction: row;
    flex-wrap: wrap; */
    width: 720px;
    gap: 16px;
  }
  @media screen and (min-width: ${breakpointDesktop}) {
    width: 1080px;
  }
`;

export const ReviewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: 100%;
  font-size: 14px;
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    background-color: var(--color-bg);
    border-radius: 8px;
  }
  @media screen and (min-width: ${breakpointTablet}) {
  }
  @media screen and (min-width: ${breakpointDesktop}) {
    font-size: 18px;
  }
`;

export const Author = styled.span`
  color: var(--color-txt-2);
  font-weight: bold;
`;

export const ReviewsListItemText = styled.p`
  color: var(--color-txt);
`;

export const ReadMoreLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
`;

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const MainBtn = styled.button`
  background-color: var(--color-bg);
  border-radius: 4px;
  padding: 8px;
  width: 140px;
  text-align: center;
  outline: none;
  border: none;
  color: var(--color-txt);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background-color: var(--color-accent);
    color: var(--color-bg);
    transform: scale(1.05);
  }
`;

export const SecondBtn = styled.button`
  border-radius: 4px;
  padding: 8px;
  width: 140px;
  text-align: center;
  outline: none;
  border: none;
  color: var(--color-txt);
  background-color: var(--color-black);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--color-bg);
    background-color: var(--color-txt-2);
    transform: scale(1.05);
  }
`;
