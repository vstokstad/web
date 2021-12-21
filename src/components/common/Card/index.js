import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background-color:  hsla(0, 0%, 0%, 0.01);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  :hover {
    background-color:  hsla(0, 0%, 0%, 0.00);
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  }
`;