import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Content, Description, Item, MoreItem, MoreSection, ShowMoreBtn, Stats, Thumbnail } from '../styles';
import { Card } from '../../../common';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();


export const Project = ({ code, project }) => {
  const { theme } = useContext(ThemeContext);
  const [more, setMore] = useState('less');

  let thumbnail;
  if (project.video !== null) {
    thumbnail =
      <iframe
        className='video'
        title={project.title}
        src={project.video}
        frameBorder='0'
        allow='autoplay; picture-in-picture' />
    ;
  } else {
    thumbnail =
      <img src={project.img} alt={project.title} />;
  }

  return (
    <>
      <Item theme={theme}>
        <Card theme={theme}>
          <Content theme={theme}>
            <h3>{project.title}</h3>
            <Thumbnail children={thumbnail} />
            <Description>
              <p>{project.description}</p>
            </Description>
            <MoreSection className={more} theme={theme}>
              <Stats theme={theme}>
                <div><b>Team size:</b> <span>{project.teamSize}</span></div>
                <div><b>Project time:</b> <span>{project.projectTime}</span></div>
                <div><b>Engine:</b> <span>{project.engine}</span></div>
                <div><b>Role:</b> <span>{project.role}</span></div>
                {project.link != null ? <div><a className='link'
                                                href={project?.link}>{'Download Game [windows]'}</a></div> : <>
                  <br /></>}
              </Stats>
              <MoreItem theme={theme}>
                <b>My Work:</b>
                <span>{project.myWork}</span>
              </MoreItem>
              <MoreItem theme={theme}>
                <b>Lessons Learned:</b>
                <span>{project.lessons}</span>
                <br />
              </MoreItem>
              {project.hasCode === true ?
                <MoreItem theme={theme}>
                  <div dangerouslySetInnerHTML={{ __html: code }} />
                  <br />
                </MoreItem> :
                <></>
              }
            </MoreSection>


            <ShowMoreBtn theme={theme} onClick={() => more === 'more' ? setMore('less') : setMore('more')}>
              {more === 'less' ?
                <h5>show more</h5> :
                <h5>hide</h5>}
            </ShowMoreBtn>
          </Content>

        </Card>
      </Item>
    </>
  )
    ;

};