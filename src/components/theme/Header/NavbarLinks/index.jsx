import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';
import ToggleTheme from '../ToggleTheme';
import { ThemeContext } from '../../../../providers/ThemeProvider';


const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#sourceCode">SourceCode</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <ToggleTheme theme={theme}/>
    </Wrapper>
  )

};

export default NavbarLinks;