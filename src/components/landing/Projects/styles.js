import styled from 'styled-components';
import '@deckdeckgo/highlight-code';

export const Wrapper = styled.div`

  
`;
export const ProjectsWrapper = styled.div`
  margin-left: 0;
  margin-right: 0;
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
export const ShowMoreBtn = styled.div`
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
  }
`;
export const MoreItem = styled.div`
  padding-bottom: 0.2rem;
  b {
    text-transform: capitalize;
  }
  span {
    display: inline-block;
    padding-bottom: 0.2rem;
  }


  .deckgo-highlight-code-carbon {
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-display: inherit;

    --deckgo-highlight-code-carbon-header-button-border-radius: 0;
    --deckgo-highlight-code-carbon-header-button-height: 0px;
    --deckgo-highlight-code-carbon-overflow: inherit;
    --deckgo-highlight-code-carbon-box-shadow: rgba(0, 0, 0, 0.2) 0 8px 16px;
    --deckgo-highlight-code-container-height: 100%;
   
  }
`;
export const Item = styled.div`

h4{
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
export const Content = styled.div`
 
  p {
    display: block;
    padding-bottom: 0.2rem;

  }

`;
export const Description = styled.div`
  width: 100%;
  display:block;
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
    @media (max-width: 680px){
      max-width: calc(180vh);
    }
  }
`;
export const Stats = styled.div`
  display: block;
  padding-bottom: 0.5rem;
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