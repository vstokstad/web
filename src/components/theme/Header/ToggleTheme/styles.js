import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }
  @media (max-width: 960px) {
    text-align: left;
  }

  margin-bottom: unset;
  
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  
  mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  

`;