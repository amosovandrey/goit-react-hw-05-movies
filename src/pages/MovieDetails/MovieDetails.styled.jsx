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
