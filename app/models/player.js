import Cell from 'sokoban/models/cell';

const { computed } = Ember;

export default Cell.extend({
  // Properties
  kind: ['player'],

  direction: 'right',

  canBeMoved: computed(function() {
    return true;
  })
});
