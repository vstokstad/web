import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="VilhelmStokstad" />
      </Thumbnail>
      <Details>
        <h1>Game Developer</h1>
        <p>
          I am a junior game developer, mainly working in C# and C++ but also have experience with swift and some web development.
        </p>
        <Button as={AnchorLink} href="#contact">
         Contact
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
