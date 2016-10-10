import Ember from 'ember';
import { createGround, createGroup } from 'sokoban/models/factory';

const { computed } = Ember;

export default Ember.Object.extend({
  // Attributes
  board: null,

  // Properties
  data: computed(function() {
    return [];
  }),

  // Methods
  at(row, column) {
    let cells = [
      createGround(row, column)
    ].concat(
      this.get('data')
      .filterBy('row', row)
      .filterBy('column', column));

    return createGroup(row, column, cells);
  },

  push(cell) {
    this.get('data').pushObject(cell);
  }
});
