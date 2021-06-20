import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Content, Stats, Grid, Item, Thumbnail } from './styles';
import gif from 'assets/portfolio/GIF/shmuperhot.gif';


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
                in regards of time and slowmotion. Developed as an assignment at Future Games. Ported to Mobile (iOS)
                through Unity.</p>
              <Thumbnail>
                <img src={gif} alt={'ShmuperHot animated GIF screenshots'} />
              </Thumbnail>
            </Content>
            <Stats>

            </Stats>
          </Card>
        </Item>
        <Item>

          <Card>
            <Content>
                <h4>Bubble Evolution</h4>
                <p>School group assignment to do a 3d game based on a 2d classic. In Bubble Evolution you are a little
                  sea creature trying to get to the top of a tower. To your help you have the ablity to shoot bubbles,
                  which you can jump onto, dash through and shoot at enemies to capture them.<br />
                  I worked on the weapon system AKA Bubble Mechanics, the camera (rotating around the tower, resulting
                  in a 2d game with a 3d aspect, inspired by Fez). I also did a lot of the lighting, sound and managed
                  Perforce, VCS, as well as acted as a unity support person. Made by a team of nine people.
                </p>

                <Thumbnail>
                  <iframe title={"Bubble Evolution"} width='100%' height='315' src='https://www.youtube-nocookie.com/embed/J_kOex71fDo'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen />
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