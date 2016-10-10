import Ember from 'ember';
import CellEnumerable from 'sokoban/models/board/cell-enumerable';

const { computed } = Ember;

export default Ember.Object.extend(Ember.Enumerable, {
  // Attributes
  board: null,

  // Properties
  length: computed.readOnly('board.rowCount'),

  // Methods
  nextObject(row) {
    if (row >= this.get('length')) {
      return;
    }

    return CellEnumerable.create({
      board: this.get('board'),
      row
    });
  }
});
