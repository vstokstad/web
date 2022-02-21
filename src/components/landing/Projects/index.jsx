import React from 'react';
import { Grid, ProjectsWrapper } from './styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '../../common';
import { Project } from './Project/Project';


export const Projects = () => {

  const data = useStaticQuery(graphql`
      {   all: allMarkdownRemark(
          filter: {frontmatter: {isActive: {eq: true}}}
          sort: {fields: frontmatter___sortOrder, order: ASC}
      ) {
          nodes {
              frontmatter {
                  sortOrder
                  description
                  engine
                  img
                  role
                  link
                  projectTime
                  slug
                  teamSize
                  title
                  video
                  myWork
                  lessons
                  isActive
                  hasCode
              }
              html
              id
          }
      }
      }

  `);

  return (
    <ProjectsWrapper as={Container} id='projects'>

      <h2>Projects</h2>
      <Grid>
        {data.all.nodes.map((node, index) => {
          return (
            <Project project={node.frontmatter} code={node.html} key={index} id={node.frontmatter.title} />
          );

        })}
      </Grid>

    </ProjectsWrapper>

  );
};

export default Projects;