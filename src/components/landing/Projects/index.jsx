import React from 'react';
import { Grid, Wrapper } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '../../common';
import { Project } from './Project/Project';


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
            myWork
            lessons
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
						return (

							<Project project={node.frontmatter} />

						);
					})}
				</Grid>

			</Wrapper>
		</>
	);
};

export default Projects;