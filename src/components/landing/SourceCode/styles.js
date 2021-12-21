import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
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

export const Content = styled.div`
.container{
  width:100%;
  position: relative;
  padding-bottom:30%;
  height:0px;

}
.text{
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   
    
}
  padding: 1rem 0;
 p {
    
    margin-right: 0.5rem;
    padding-bottom: 0.2rem;
    
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;

    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;