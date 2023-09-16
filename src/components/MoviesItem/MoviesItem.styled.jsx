import { styled } from 'styled-components';

const breakpointTablet = '768px';
const breakpointDesktop = '1440px';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
  font-size: 14px;

  @media screen and (min-width: ${breakpointTablet}) {
    gap: 32px;
    padding: 24px;
    font-size: 16px;
  }

  @media screen and (min-width: ${breakpointDesktop}) {
    gap: 48px;
    padding: 36px;
    font-size: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 296px;
  gap: 24px;
  @media screen and (min-width: ${breakpointTablet}) {
    width: 720px;
  }

  @media screen and (min-width: ${breakpointDesktop}) {
    width: 1392px;
  }
`;

export const MovieWrapper = styled.div`
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const MovieTitle = styled.h1`
  color: var(--color-txt-2);
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1rem;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const MovieImage = styled.img`
  width: 296px;
  height: 444px;
  @media screen and (min-width: ${breakpointTablet}) {
    width: 348px;
    height: 522px;
  }

  @media screen and (min-width: ${breakpointDesktop}) {
  }
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 296px;

  @media screen and (min-width: ${breakpointTablet}) {
    width: 348px;
    height: 522px;
  }
  @media screen and (min-width: ${breakpointDesktop}) {
    width: 708px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  @media screen and (min-width: ${breakpointDesktop}) {
    padding: 0 156px;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  width: 100%;
`;

export const DetailsListItem = styled.li`
  background-color: var(--color-bg);
  border-radius: 4px;
  padding: 8px;
  min-width: 100px;
  text-align: center;
  transition: var(--transition);
  &:hover {
    transform: scale(1.1);
  }
`;
