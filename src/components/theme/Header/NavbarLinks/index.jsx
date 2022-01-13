import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#sourceCode">SourceCode</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      {/* <ToggleTheme/> */}
    </Wrapper>
  )

};

export default NavbarLinks;