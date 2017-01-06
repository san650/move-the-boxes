import Ember from 'ember';
import { createGround, createGroup } from 'move-the-boxes/models/factory';

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
    let cells = this.get('data').filterBy('row', row).filterBy('column', column);

    if (cells.every((cell) => cell.get('needsGround'))) {
      cells.unshift(createGround(row, column));
    }

    return createGroup(row, column, cells);
  },

  push(cell) {
    this.get('data').pushObject(cell);
  }
});
