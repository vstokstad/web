import styled from 'styled-components';
import '@deckdeckgo/highlight-code';

export const Wrapper = styled.div`


`;
export const ProjectsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  h2 {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

`;
export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  
`;
export const ShowMoreBtn = styled.div`
  padding: 1rem;

  h5 {
    float: right;
    text-decoration: underline;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const MoreSection = styled.div`



  &.more {
    visibility: visible;
    opacity: 1;
    max-height: 2000px;
    transition: visibility 0.4s linear, opacity 0.3s linear, max-height 0.3s linear;
  }

  &.less {
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    transition: visibility 0.4s linear, opacity 0.3s linear, max-height 0.3s linear;

    .deckgo-highlight-code-carbon {
      --deckgo-highlight-code-carbon-display: none;
    }
  }

`;
export const MoreItem = styled.div`
  padding: 1rem 1rem 0.2rem;

  b {
    text-transform: capitalize;
  }

  span {
    display: inline-block;
    padding-bottom: 0.2rem;
  }
`;
export const CodeItem = styled.div`
  padding: 0 0 0.2rem;

  b {
    text-transform: capitalize;
  }

  span {
    display: inline-block;
    padding-bottom: 0.2rem;
  }

  .deckgo-highlight-code-carbon {
    padding: 0;
    margin: 0;
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-display: inherit;
    --deckgo-highlight-code-carbon-visibility: inherit;
    --deckgo-highlight-code-carbon-box-shadow: rgba(0, 0, 0, 0.0) 0 0px 0px;

    --deckgo-highlight-code-carbon-header-button-width: 0;

    --deckgo-highlight-code-border-radius: 0px;
    --deckgo-highlight-code-carbon-border-radius: 0px;
    --deckgo-highlight-code-carbon-margin: 0;
    --deckgo-highlight-code-margin: 0;
    --deckgo-highlight-code-padding: 1rem;
    --deckgo-highlight-code-carbon-header-button-border-radius: 0;
    --deckgo-highlight-code-carbon-header-button-height: 0px;
    --deckgo-highlight-code-carbon-overflow: auto;
    --deckgo-highlight-code-container-height: 100%;
    --deckgo-highlight-code-container-width: content;

    @media (max-width: 480px) {
      --deckgo-highlight-code-carbon-display: none;
    }

`
export const Item = styled.div`

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }

  .link {
    text-decoration: underline;

    :hover {
      text-decoration: underline;
    }
  }
`;
export const Card = styled.div`
  padding: 0;

  background: #fff;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  :hover {
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);
  }
`;
export const Content = styled.div`

  h3 {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  p {
    display: block;
    padding-bottom: 0.2rem;

  }


`;
export const Description = styled.div`
  padding: 1rem;
  display: block;
  text-align: justify;
  margin-top: 00.5rem;

`;
export const Thumbnail = styled.div`


  padding: 56.25% 0 0 0;
  position: relative;
  height: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }

  @media (max-device-width: 400px) {
    .video {
      position: absolute;
      top: 0;
      left: 0;
      width: 90%;
      height: 100%;

    }
  }
`;
export const Stats = styled.div`
  display: block;
  padding: 1rem 1rem 0.5rem;

  svg path {
    fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  }

  div {


    b {
      text-transform: capitalize;
    }

    span {
      display: inline-block;
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

  }
`;