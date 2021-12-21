import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from '../../common';
import starIcon from '../../../assets/icons/star.svg';
import forkIcon from '../../../assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const SourceCode = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
    query {
    github {
      viewer {
        repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER) {
          edges {
            node {
              id
              name
              url
              shortDescriptionHTML
              stargazers {
                totalCount
              }
              forkCount
              
            }
          }
        }
      }
    }
  }
    `,
  );
  return (
    <Wrapper as={Container} id='sourceCode'>
      <h2>SourceCode <a href={'https://www.github.com/vstokstad'}>github.com/vstokstad</a></h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as='a'
            href={node.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <div className='container'>
                  <p className='text'>{node.shortDescriptionHTML}</p>
                </div>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt='stars' />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt='forks' />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>

  );
};