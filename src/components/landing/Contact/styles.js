import styled from 'styled-components';
import contactOverlayIllustration from 'assets/illustrations/contact-overlay.svg';
export const Wrapper = styled.div`
  background-image: url(${contactOverlayIllustration});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const ContactWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Details = styled.div`
  flex: 1;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 960px) {
    padding-left: unset;
    padding-right: unset;
    width: 100%;
    order: 1;
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
    width: 100%;

  }

  img {

    width: 100%;
    margin-top: 2rem;
  }
`;