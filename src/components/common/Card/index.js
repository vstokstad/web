import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;

  background: #fff;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  :hover {
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  }
`;