import Ember from 'ember';
import Cell from 'sokoban/models/cell';

const { computed } = Ember;

export default Cell.extend(Ember.Enumerable, {
  // Attributes
  cells: null,

  // Properties
  length: computed.readOnly('cells.length'),

  kind: computed('cells.[]', function() {
    return flat(this.get('cells').mapBy('kind')).uniq();

    function flat(arr) {
      return arr.inject((result, item) => result.concat(item), []);
    }
  }),

  occupiesSpace: computed(function() {
    return this.get('cells').isAny('occupiesSpace');
  }),

  canBeMoved: computed(function() {
    return this.get('cells').isEvery('canBeMoved');
  }),

  // Methods
  nextObject(index) {
    return this.get('cells')[index];
  },

  moveTo(row, column) {
    this.get('cells').forEach((cell) => cell.moveTo(row, column));
  }
});
