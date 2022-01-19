import styled from 'styled-components';

export const ProgressBar = styled.div`
  font-family: monospace;
  display: inline-grid;
  h4{
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  h3{
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
  a {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
    :hover {
      cursor: pointer;
      color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
      @media (max-width: 960px) {
        mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
      }
    }
  }

  label {
    font-weight: bold;
    margin-top: 1rem;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    :hover {
      cursor: pointer;
      @media (max-width: 960px) {
        mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
      }
    }
  }

  small {
  display: inline-block;
  font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
.progress{
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
}
  .footer{
    float: right;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
  progress {
    display: block;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
  


`;