import React from 'react';
import { graphql } from 'gatsby';

export default function Template({
	                                 data, // this prop will be injected by the GraphQL query below.
                                 }) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<div className='blog-post-container'>
			<div className='blog-post'>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.description}</h2>
				<div
					className='blog-post-content'
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</div>
	);
}
export const pageQuery = graphql`
  {
      allMarkdownRemark {
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
`;