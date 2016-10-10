import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend(Ember.Enumerable, {
  // Attributes
  board: null,
  row: null,

  // Properties
  length: computed.readOnly('board.columnCount'),

  // Methods
  nextObject(column) {
    if (column >= this.get('length')) {
      return;
    }

    let row = this.get('row');

    return this.get('board.cells').at(row, column);
  }
});
