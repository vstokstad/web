import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;

  width: 90%;
  margin: 0 auto;
  @media (min-width: 391px) {
    margin: 0 auto;
  }
  @media (min-width: 601px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 993px) {
    width: 80%;
    margin: 0 auto;

  }
`;