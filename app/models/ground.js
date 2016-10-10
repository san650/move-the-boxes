import Ember from 'ember';
import Cell from 'sokoban/models/cell';

const { computed } = Ember;

export default Cell.extend({
  kind: ['ground'],

  occupiesSpace: computed(function() {
    return false;
  }),

  canBeMoved: computed(function() {
    return true;
  }),

  moveTo(row, column) {
    // Although it's marked as can be moved, it
    // can't actually be moved
  }
});
