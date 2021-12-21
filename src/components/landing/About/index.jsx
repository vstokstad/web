import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button, Container } from '../../common';
import contact from '../../../assets/illustrations/contact.svg';
import { Details, Recipe, SkillsWrapper, Thumbnail, Wrapper } from './styles';

export const About = () => (
  <Wrapper id='about'>
    <SkillsWrapper as={Container}>

      <Details>
        <p className='maintext'>

          I am a game programmer, mainly working in C++. I also have experience
          with swift (iOS) and Javascript/TypeScript web development as well as Unity, Unreal and C#.

        </p>
        <p className='more'>
          I have studied Game Programming at Future Games in Stockholm.
          I really enjoy most aspects of making games, but I have noticed that I tend to get quite involved in gameplay systems and AI.
          I guess I like having structure but also making stuff structured.
          Also I like writing c++ and while I am not great at math, I do enjoy making some physics and shaders once in a while.
          <br />
          Before studying programming I was a freelance documentary photographer.
          Other than covering general news in Sweden I was reporting from countries such as Syria, Myanmar, Indonesia, Iraq.
          If you are interested, some of my photographic work can be <a className='link' href="https://visura.co/stokstad">seen here.</a>
        </p>

        <Recipe>
          <div className='h'>
            If i was a drink, this is the recipe:<br />
            <span className='small'>(or this is what i think is most fun to do)</span>
          </div><br />
          <ul>
            <li>1 liter Systems.</li>
            <li>0.5 liter Gameplay.</li>
            <li>0.5 liters AI / Enemy behaviour.</li>
            <li>A dash of VFX/Shaders</li>
            <li>A wedge of UI and UX each.</li>
            <li>Shake well in Unreal or Unity or whichever engine is used.</li>
            <li>Serve in a chilled glass on your preferred platform.</li>
          </ul>
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