import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export let Wrapper;
Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
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

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;
export const Thumbnail = styled.div`

  flex: 1;
  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 2rem;
  }

  img {
    border-spacing: 2rem;
    padding: 2rem;
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
    margin-top: 4rem;
    align-self: center;
    flex: content-box;
    
  }
`;