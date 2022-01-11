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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
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
  padding-right: 2rem;
  display: block;
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
    color: #707070;
  }

  p.more {
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.1;
    color: #707070;
  }

  a.link {
    font-size: 12pt;
    font-weight: normal;
    line-height: 1.1;
    color: #707070;
    text-decoration: underline;

    :hover {
      text-decoration: underline;
      color: #212121;
    }
  }

`;

export const Recipe = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    padding-right: unset;

  }

  p {
    margin-bottom: 2.5rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.5;
    color: #707070;
  }

  div.h {
    margin-bottom: 0.2rem;
    line-height: 1;
    font-size: 14pt;
    font-weight: bold;
    color: #707070;
  }

  span.small {
    margin-bottom: 2.5rem;
    font-size: 10pt;
    font-weight: normal;
    color: #707070;
  }

  li {
    font-size: 12pt;
    font-weight: normal;
    color: #707070;
  }

  ul {
    margin-bottom: 2.5rem;
  }



`;

export const Thumbnail = styled.div`


  img {
    @media (max-width: 680px) {
      width: 80%;
      margin-right: 10%;
      margin-left: 10%;
      align-self: center;
      flex: content-box;
    }
    @media (max-width: 960px) {
      width: 50%;
      margin-right: 25%;
      margin-left: 25%;
      align-self: center;
      flex: content-box;
    }
    width: 40%;
    margin-right: 30%;
    margin-left: 30%;
    align-self: center;
    flex: content-box;
  }

`;
export const Item = styled.div`
  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;