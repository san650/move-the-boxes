import Ember from 'ember';
import Player from 'sokoban/models/player';
import Board from 'sokoban/models/board';
import Box from 'sokoban/models/box';

const { computed, debug } = Ember;

export default Ember.Object.extend({
  board: computed(function() {
    let board = Board.create({ rowCount: 6, columnCount: 6 });

    board.setWall([
      [0,0], [0,1], [0,2], [0,3], [0,4], [0,5],
      [1,0],                             [1,5],
      [2,0],                             [2,5],
                           [3,3],        [3,5],
      [4,0],                             [4,5],
      [5,0], [5,1], [5,2], [5,3], [5,4], [5,5]
    ]);

    return board;
  }),

  player: computed(function() {
    return Player.create({
      row: 3,
      column: 0
    });
  }),

  box: computed(function() {
    return Box.create({
      row: 2,
      column: 3
    });
  }),

  targetRow: 3,
  targetColumn: 0,

  up() {
    let row = this.get('player.row') - 1;
    let column = this.get('player.column');

    this.move(row, column, [-1,0]);
  },

  down() {
    let row = this.get('player.row') + 1;
    let column = this.get('player.column');

    this.move(row, column, [1,0]);
  },

  left() {
    let row = this.get('player.row');
    let column = this.get('player.column') - 1;

    this.move(row, column, [0,-1]);
  },

  right() {
    let row = this.get('player.row');
    let column = this.get('player.column') + 1;

    this.move(row, column, [0,1]);
  },

  isValidCell(row, column) {
    if (row < 0 || column < 0) {
      return;
    }

    if (row === this.get('board.rowCount') || column === this.get('board.columnCount')) {
      return;
    }

    return this.get('board.cells')[row][column].get('isGround');
  },

  isBox(row, column) {
    let box = this.get('box');

    return row === box.get('row') && column === box.get('column');
  },

  move(row, column, [offsetRow, offsetColumn]) {
    if (this.get('won')) {
      return;
    }

    if (this.isValidCell(row, column)) {
      if (!this.isBox(row, column) || this.moveBox(row + offsetRow, column + offsetColumn)) {
        this.set('player.row', row);
        this.set('player.column', column);
      }
    } else {
      debug('is wall');
    }
  },

  moveBox(row, column) {
    if (this.isValidCell(row, column)) {
      this.set('box.row', row);
      this.set('box.column', column);
      return true;
    }
  },

  won: computed('box.{row,column}', function() {
    return this.get('box.row') === this.get('targetRow') &&
      this.get('box.column') === this.get('targetColumn');
  })
});
