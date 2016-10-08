import Ember from 'ember';

const { computed } = Ember;

const Cell = Ember.Object.extend({
  type: 'ground',
  row: null,
  column: null,

  isGround: computed.equal('type', 'ground'),
  isWall: computed.equal('type', 'wall')
});

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

  cells: computed('rowCount', 'columnCount', function() {
    let cells = Ember.A([]);
    let rows = this.get('rowCount');
    let columns = this.get('columnCount');

    for(let j = 0; j < rows; j++) {
      cells.pushObject(Ember.A([]));
      for(let i = 0; i < columns; i++) {
        cells[j].push(Cell.create({
          row: j,
          column: i
        }));
      }
    }

    return cells;
  }),

  rows: computed.readOnly('cells'),

  setWall(positions) {
    let cells = this.get('cells');

    positions.forEach(([row, column]) => {
      cells[row][column].set('type', 'wall');
    });
  }
});
