import Ember from 'ember';
import RowEnumerable from 'sokoban/models/board/row-enumerable';
import CellMap from 'sokoban/models/board/cell-map';

const { computed } = Ember;

export default Ember.Object.extend({
  // Attributes
  rowCount: null,
  columnCount: null,

  // Constructor
  init() {
    this._super(...arguments);

    // set default size
    this.set('rowCount', this.get('rowCount') || 5);
    this.set('columnCount', this.get('columnCount') || 5);
  },

  cells: computed(function() {
    return CellMap.create({ board: this });
  }),

  rows: computed('cells', function() {
    return RowEnumerable.create({
      board: this
    });
  }).volatile(),

  pushCell(cell) {
    this.get('cells').push(cell);
  },

  isInsideLimits(row, column) {
    return (row >= 0 && column >= 0) &&
      (row < this.get('rowCount') && column < this.get('columnCount'));
  },

  at(row, column) {
    return this.get('cells').at(row, column);
  },

  isEmpty(row, column) {
    return this.isInsideLimits(row, column) &&
      !this.at(row, column).get('occupiesSpace');
  },

  canBeMoved(row, column) {
    return this.at(row, column).get('canBeMoved');
  },

  targetsFulfilled() {
    let boxes = this.get('cells.data').filterBy('isBox');
    let targets = this.get('cells.data').filterBy('isTarget');

    return targets.every(
      (target) => boxes
        .filterBy('row', target.get('row'))
        .isAny('column', target.get('column'))
    );
  }
});
