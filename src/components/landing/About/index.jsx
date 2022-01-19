import React, { useContext } from 'react';
import { Card, Container } from '../../common';
import { Details, Recipe, SkillsWrapper, Wrapper, Grid, Item } from './styles';
import { CodeStats } from './CodeStats';
import { ThemeContext } from '../../../providers/ThemeProvider';

export const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id='about'>
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>About</h1>
          <p className='maintext'>
            I am a game programmer currently studying at Future Games and I am looking for an internship from May
            through
            December 2022!
          </p>
          <div className='more'>
            <div>
              I do most parts of game dev, but I am especially interested in <span
              >Gameplay</span> , <span>AI</span> and general <span>Engine</span> work.
              I guess I like having structure but also making code <span className='keyword'>structured</span>.
              The <span
              className='keyword'>creative</span> aspects of programming really speak to me, one person's way to solve a
              problem will never be the same as another's.
              I value <span className='keyword'>teamwork</span> as one of the most important ingredients to create great
              things but I won't shy away from bashing my head into a problem to solve it, while also being aware of my
              own limitations and asking for help when i need it.
            </div>
            <br />
            <div>
              Before studying programming, I was a freelance documentary photographer / visual storyteller. Other than
              covering general news in
              Sweden I was reporting from countries such as Syria, Myanmar, Indonesia, Iraq.
              If you are interested, some of my photographic work can be <a className='link'
                                                                            href='https://visura.co/stokstad'>seen
              here.</a>
            </div>
            <br />
            <h3>Here is my   <a className='link'
              href='https://docs.google.com/document/d/e/2PACX-1vQT-OOXMW_mlcF88uGglZ2Lh73qUfDNe0cnM67uftgwYaSjXpPIWGmZJDMDx90aPM5zSpBJlwrnPauO/pub'>CV.</a>
            </h3>
          </div>
          <Grid theme={theme}>
            <Item theme={theme}>
              <Card theme={theme}>
                <Recipe theme={theme}>
                  <h3>
                    Interests and skills
                  </h3>
                  <ul>
                    <li>Gameplay</li>
                    <li>AI & Behaviour</li>
                    <li>Systems</li>
                    <li>Network</li>
                    <li>Engines</li>
                    <li>Rendering</li>
                  </ul>
                </Recipe>
              </Card>
            </Item>
            <Item theme={theme}>
              <Card theme={theme}>
                <CodeStats theme={theme} />
              </Card>
            </Item>
          </Grid>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
    ;
};