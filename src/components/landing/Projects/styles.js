import styled from 'styled-components';
import '@deckdeckgo/highlight-code';

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
export const ShowMoreBtn = styled.div`
  h5 {
    float: right;
    color: darkgrey;
    text-decoration: underline;

    :hover {
      text-decoration: underline;
      color: dimgray;
      cursor: pointer;
    }

    :active {
      color: darkred;
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


  .deckgo-highlight-code-carbon {
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-display: inherit;

    --deckgo-highlight-code-carbon-header-button-border-radius: 0;
    --deckgo-highlight-code-carbon-header-button-height: 0px;
    --deckgo-highlight-code-carbon-overflow: inherit;
    --deckgo-highlight-code-carbon-box-shadow: rgba(0, 0, 0, 0.2) 0 8px 16px;
    --deckgo-highlight-code-container-height: 100%;
    --deckgo-highlight-code-carbon-margin: 0.5rem 0.5rem;
  }
`;
export const Item = styled.div`


  h3 {
    color: gray();
  }


  p {
    color: dimgray;
  }

  .link {
    color: darkgrey;
    text-decoration: underline;

    :hover {
      color: dimgray;
      text-decoration: underline;
    }
  }
`;
export const Content = styled.div`
  padding: 1rem 0;

  p {
    display: block;
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;

  }

`;
export const Description = styled.div`
  width: 100%;
  display:block;
  text-align: justify;
  margin-top: 00.5rem;
	@media
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
`;
export const Stats = styled.div`
  display: block;
  padding-bottom: 0.5rem;

  div {
    margin-right: 0.5rem;

    b {
      text-transform: capitalize;
    }

    span {
      display: inline-block;
      color: #707070;
    }

  }
`;