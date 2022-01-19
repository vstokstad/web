import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  @media (max-width: 680px) {
  padding: 0.5rem;
  }
  background-color:  hsla(0, 0%, 0%, 0.01);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  :hover {
    background-color:  hsla(0, 0%, 10%, 0.01);
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  }
`;