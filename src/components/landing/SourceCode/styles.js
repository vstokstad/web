import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`

  h4 {
  
  }

  p {
 
  }
`;

export const Content = styled.div`
  .container {
    width: 100%;
    position: relative;

  }
  

  p {
    padding-bottom: 0.2rem;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;

    &:first-child {
    
    }

    img {
      margin: 0;
    }

    span {
      margin-left: 0.5rem;
    }
  }
`;