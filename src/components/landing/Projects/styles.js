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

  h5 {
    float: right;
	  
    color: #212121;
  }

  p {
    color: #707070;
  }
  .link{
   color: #707070;
   text-decoration: underline;
   :hover{
     color:#212121;
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
display: block;
text-align: justify;

margin-top: 00.5rem;
margin-bottom: 00.5rem;
@media (max-width: 960px) {

 }
 @media (max-width: 680px) {

 }

`;

export const Thumbnail = styled.div`

  width: 100%;

  position: relative;
    padding-bottom: 56.25%;
    height:0px;

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