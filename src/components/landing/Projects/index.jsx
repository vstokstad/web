import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Content, Stats, Grid, Item, Thumbnail } from './styles';
import shmupIMG from 'assets/portfolio/shmuperhot1.PNG'
export const Projects = () => {
  return (
    <Wrapper as={Container} id='projects'>
      <h2>Projects</h2>
      <Grid>
        <Item>

          <Card>
            <Content>
              <h4>SHMUPER HOT</h4>
              <p>Space Shoot'Em Up mini game with heavy inspiration from
                <a href='https://superhotgame.com' rel='noreferrer'> Super Hot </a>
                in regards of time and slowmotion. Developed as an assignment at Future Games. Ported to Mobile (iOS) through Unity.</p>
              <Thumbnail>
                <img src={shmupIMG} alt="shmuperhot1"/>
              </Thumbnail>
            </Content>
            <Stats>

            </Stats>
          </Card>
        </Item>
      </Grid>

    </Wrapper>
  );
};