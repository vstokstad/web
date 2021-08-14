import React from 'react';
import { Content, Grid, Item, Stats, Thumbnail, Wrapper } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, Container } from '../../common';


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
					{data.all.nodes.map((node) => {
						let project = node.frontmatter;
						return (
							<Item><Card>
								<Content>
									<h4>{project.title}</h4>
									<Thumbnail>
										<iframe title={project.title} width='100%' height='315'
										        src={project.video}
										        frameBorder='0'
										        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										        allowFullScreen />
									</Thumbnail>
									<p>{project.description}</p>

								</Content>
								<Stats>
									<p>
										<b>Team size:</b> {project.teamSize} <br />
										<b>Project time:</b> {project.projectTime} <br />
										<b>Engine:</b> {project.engine} <br />
										<b>Role:</b> {project.role} <br />
									</p>
								</Stats>

							</Card>
							</Item>
						);
					})}


				</Grid>

			</Wrapper>
		</>
	);
};

export default Projects;