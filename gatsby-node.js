const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
	if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      'plugins': [
        plugins.provide({ 'process': 'process/browser' }),
      ],

      'resolve': {
        'modules': [path.resolve(__dirname, 'src'), 'node_modules'],
      }
    })
  }}