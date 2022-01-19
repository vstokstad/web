import styled from 'styled-components';


export const Grid = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    //  grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 680px) {
    //   grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProgressBar = styled.div`
  font-family: monospace;
  display: inline-grid;

  a {
    :hover {
      cursor: pointer;
      color: #222222;
    }
  }

  label {
    font-weight: bold;
    color: dimgray;
    margin-top: 1rem;

    :hover {
      cursor: pointer;
      color: #222222;
    }
  }

  small {
 display: inline-block;
  font-weight: normal;
  }
.progress{
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	
}
  progress {
    display: block;
    transition: color 1s 0.5s ease-in-out, width 1s 1s ease-out;
    // -webkit-appearance: none;

    /* ::-webkit-progress-inner-element {
			 border: 1px none dimgray;
			 border-radius: 10px;
			 height: 0.5rem;
		 }
 
		 ::-webkit-progress-bar {
			 background-color: dimgray;
			 border-radius: 10px;
			 height: 0.5rem;
		 }
 
		 ::-webkit-progress-value {
			 background-color: rebeccapurple;
			 border-radius: 10px;
			 height: 0.5rem;
		 }
		 */

  }

  h3 {
    margin-bottom: 0.2rem;
    line-height: 1;
    font-size: 14pt;
    font-weight: bold;
    color: dimgray;
  }


`;