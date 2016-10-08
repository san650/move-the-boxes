module.exports = function(deployTarget) {
  return {
    pagefront: {
      app: 'ember-sokoban',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
