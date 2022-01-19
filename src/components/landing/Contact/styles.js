import styled from 'styled-components';
import contactOverlayIllustration from '../../../assets/illustrations/contact-overlay.svg';

export let Wrapper;
Wrapper = styled.div`
  background-image: url(${contactOverlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;
export const ContactWrapper = styled.div`
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
    order: 1;
    padding-right: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
  
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
  }
`;
export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }
  img {

    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;