module.exports = function(deployTarget) {
  return {
    pagefront: {
      app: 'move-the-boxes',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
