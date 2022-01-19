import React, { useContext} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from '../../common';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { ThemeContext } from '../../../providers/ThemeProvider';

export const SourceCode = () => {
  const { theme } = useContext(ThemeContext);
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
      <h2>sourceCode <a href={'https://www.github.com/vstokstad'}>github.com/vstokstad</a></h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as='a'
            href={node.url}
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <div className='container'>
                  <p className='text'>{node.shortDescriptionHTML}</p>
                </div>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
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