import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, Container } from '../../common';
import contact from '../../../assets/illustrations/contact.svg';
import { Details, Recipe, SkillsWrapper, Thumbnail, Wrapper } from './styles';

export const About = () => (
  <Wrapper id='about'>
    <SkillsWrapper as={Container}>

      <Details>
        <h1>Game Developer</h1>
        <p>
          I am a gameplay programmer, mainly working in C++ (Unreal) and C# (Unity). I also have experience
          with swift (iOS) and Javascript/TypeScript web development.
        </p>
        <Recipe>
          <p>
            <b>
              If i was a drink, this is the recipe:
            </b>
            <ul>
              <li>1 liter Gameplay.</li>
              <li>0.5 liters AI / Enemy behaviour.</li>
              <li>A dash of VFX/Shaders</li>
              <li>A wedge of UI and UX each.</li>
              <li>Shake well in Unreal or Unity or whichever engine is used.</li>
              <li>Serve in a chilled glass on your preferred platform.</li>
            </ul>
          </p>
        </Recipe>
        <Button as={AnchorLink} href='#contact'>
          Contact
        </Button>
      </Details>
      <Thumbnail>
        <img src={contact} alt='Vilhelm Stokstad' />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)