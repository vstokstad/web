import React from 'react';
import { Card, Container } from 'components/common';
import { Content, Grid, Item, Stats, Thumbnail, Wrapper } from './styles';
import { graphql, useStaticQuery } from 'gatsby';


export const Projects = () => {
	const data = useStaticQuery(graphql`
    {
     all: allMarkdownRemark {
        nodes {
          frontmatter {
            description
            engine
            img
            role
            projectTime
            slug
            teamSize
            title
            video
          }
        }
      }
    }
  `)
	return (
		<>
			<Wrapper as={Container} id='projects'>
				<h2>Projects</h2>
				<Grid>
					{data.all.nodes.map((node) => (
						<Item><Card>
							<Content>
								<h4>{node.frontmatter.title}</h4>
								<Thumbnail>
									<iframe title={node.frontmatter.title} width='100%' height='315'
									        src={node.frontmatter.video}
									        frameBorder='0'
									        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									        allowFullScreen />
								</Thumbnail>
								<p>{node.frontmatter.description}</p>

							</Content>
							<Stats>
								<p>
									<b>Team size:</b> {node.frontmatter.teamSize} <br/>
									<b>Project time:</b> {node.frontmatter.projectTime} <br/>
									<b>Engine:</b> {node.frontmatter.engine} <br/>
									<b>Role:</b> {node.frontmatter.role} <br/>
								</p>
							</Stats>

						</Card></Item>
					))}


				</Grid>

			</Wrapper>
		</>
	);
};

export default Projects;