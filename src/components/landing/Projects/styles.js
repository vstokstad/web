import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  div {
    .more {
      display: none;
    }

    .less {
      display: inherit;

    }
  }


  h3 {
    color: #212121;
  }

  h2 {
    float: right;
    color: #212121;
  }

  p {
    color: #707070;
  }

`;

export const Content = styled.div`
  padding: 1rem 0;

  p {
    display: block;
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;
    text-align: justify;

  }

`;


export const Thumbnail = styled.div`
  flex: auto;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    display: flex;
    width: 100%;

  }

  iframe {
    display: block;
    width: 100%;
    height: 315px;
  }
`;
export const Stats = styled.div`
  display: block;
  padding-bottom: 0.5rem;

  div {
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;

    b {
      text-transform: capitalize;
    }

    span {
      display: inline-block;
      color: #707070;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      padding-bottom: 0.2rem;

    }

  }
`;