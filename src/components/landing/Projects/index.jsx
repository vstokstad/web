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
                      descriptionLong
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
                      link
                      isActive
		                  hasCode
                  }
                  html
              }
          }
      }
	`);

	return (
		<>
			<Wrapper as={Container} id='projects'>
				<h2>Projects</h2>
				<Grid>
					{data.all.nodes.map((node, index) => {
						if (node.frontmatter.isActive === true) {
							return (
								<Project project={node.frontmatter} code={node.html} key={index} />
							);
						} else {
							return (<></>);
						}
					})}
				</Grid>

			</Wrapper>
		</>
	);
};

export default Projects;