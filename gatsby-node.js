const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;

  createFieldExtension({
    name: 'project',
    extend: () => ({
      resolve(source, args, context, info) {
        return String(source[info.fieldName]).toUpperCase();
      },
    }),
  });

  const typeDefs = `
    type MarkdownRemark implements Node @dontInfer {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      description: String
      engine: String
      img: String
      role: String
      link: String
      projectTime: String
      slug: String
      teamSize: String
      title: String
      video: String
      myWork: String
      lessons: String
      isActive: Boolean
      hasCode: Boolean
    }
  `;
  createTypes(typeDefs);
};