import styled from 'styled-components';
import detailsIllustration from '../../../assets/illustrations/details.svg';

export let Wrapper;
Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;
export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 1fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    //  grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 680px) {
    //   grid-template-columns: repeat(2, 1fr);
  }
`;
export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p.maintext {
    font-size: 20pt;
    margin-bottom: 1.2rem;
    font-weight: normal;
    line-height: 1.3;
    color: dimgray;
  }
div.cv{
	font-weight: bold;
}
	span.keyword{
		font-weight: bold;
	}
  p.more {
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.1;
    color: dimgray;
  }

  a.link {
    font-size: 12pt;
    font-weight: inherit;
    line-height: 1.1;
    color: dimgray;
    text-decoration: underline;

    :hover {
      text-decoration: underline;
      color: #212121;
    }
  }

`;

export const Recipe = styled.div`
	font-family: monospace;
  display: inline-grid;
  @media (max-width: 960px) {
    padding-right: unset;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.5;
    color: dimgray;
  }

  div.h {
    margin-bottom: 0.2rem;
    line-height: 1;
    font-size: 14pt;
    font-weight: bold;
    color: dimgray;

  }
	
  span.small {
    margin-bottom: 2.5rem;
    font-size: 10pt;
    font-weight: normal;
    color: dimgray;
  }

  li {
    font-size: 12pt;
    font-weight: normal;
    color: dimgray;
  }

  ul {
    margin-bottom: 2.5rem;
  }

`;

export const Item = styled.div`
  display: flex;

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;