const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const events = await graphql(`
    {
        allPrismicEvent {
        nodes {
          id
          uid
        }
      }
    }
  `);

  events.data.allPrismicEvent.nodes.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(__dirname, 'src/templates/event.js'),
      context: {
        id: node.id,
      },
    });
  });
};


