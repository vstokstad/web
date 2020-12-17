import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>

      <Details>
        <h1>Game Developer</h1>
        <p>
          I am a junior game developer, mainly working in C# and C++ but also have experience with swift and some web development.
        </p>
        <Button as={AnchorLink} href="#contact">
         Contact
        </Button>
      </Details>
      <Thumbnail>
        <img src={contact} alt="Vilhelm Stokstad" />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)