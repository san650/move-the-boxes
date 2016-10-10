import Ember from 'ember';
import Cell from 'sokoban/models/cell';
import Ground from 'sokoban/models/ground';
import Wall from 'sokoban/models/wall';
import Box from 'sokoban/models/box';
import Group from 'sokoban/models/group';
import Target from 'sokoban/models/target';

const { computed } = Ember;

const RowEnumerable = Ember.Object.extend(Ember.Enumerable, {
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
      row: row
    });
  }
});

const CellEnumerable = Ember.Object.extend(Ember.Enumerable, {
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

    this.incrementProperty('column');

    let row = this.get('row');
    let cells = this.get('board.cells');

    return cells.at(row, column);
  }
});

const CellCollection = Ember.Object.extend({
  // Attributes
  board: null,

  // Properties
  data: computed(function() {
    return [];
  }),

  // Methods
  at(row, column) {
    return Group.create({
      cells: [
          this.get('board').createGround(row, column)
        ].concat(
          this.get('data')
          .filterBy('row', row)
          .filterBy('column', column))
    });
  },

  push(cell) {
    this.get('data').pushObject(cell);
  }
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

  cells: computed(function() {
    return CellCollection.create({
      board: this
    });
  }),

  rows: computed('cells', function() {
    return RowEnumerable.create({
      board: this
    });
  }).volatile(),

  setWall(positions) {
    positions.forEach(([row, column]) => {
      console.log(`wall[${row}, ${column}]`);
      this.pushCell(this.createWall(row, column));
    });
  },

  pushCell(cell) {
    this.get('cells').push(cell);
  },

  isInsideLimits(row, column) {
    return (row >= 0 || column >= 0) &&
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

  // Factory
  createWall(row, column) {
    return Wall.create({ row, column });
  },

  createGround(row, column) {
    return Ground.create({ row, column });
  },

  createBox(row, column) {
    return Box.create({ row, column });
  },

  createTarget(row, column) {
    return Target.create({ row, column });
  },

  targetsFulfilled() {
    let boxes = this.get('cells.data').filterBy('constructor', Box);
    let targets = this.get('cells.data').filterBy('constructor', Target);

    return targets.every(
      (target) => boxes
        .filterBy('row', target.get('row'))
        .isAny('column', target.get('column'))
    );
  }
});
