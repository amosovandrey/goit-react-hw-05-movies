import styled from 'styled-components';

const breakpointTablet = '768px';
const breakpointDesktop = '1440px';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .pagination {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 4px;
  }

  .pagination li {
    margin: 0;
  }

  .pagination a {
    text-decoration: none;
    padding: 4px 8px;
    border: 1px solid var(--color-bg);
    border-radius: 4px;
    color: var(--color-txt);
    background-color: var(--color-bg);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--color-accent);
      color: var(--color-bg);
    }
  }

  .pagination li.active a {
    background-color: var(--color-accent);
    color: var(--color-bg);
    font-weight: bold;
  }

  .pagination li.disabled a {
    pointer-events: none;
    color: var(--color-txt-2);
    background-color: transparent;
    border: none;
  }

  @media screen and (min-width: ${breakpointTablet}) {
    .pagination a {
      padding: 8px 16px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: ${breakpointDesktop}) {
    font-size: 18px;
  }
`;
