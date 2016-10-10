import Ember from 'ember';
import Player from 'sokoban/models/player';
import Board from 'sokoban/models/board';
import Box from 'sokoban/models/box';

const { computed, debug } = Ember;

export default Ember.Object.extend({
  board: computed(function() {
    let wall = [
      [0,0], [0,1], [0,2], [0,3], [0,4], [0,5],
      [1,0],               [1,3],        [1,5],
      [2,0],                             [2,5],
                           [3,3],        [3,5],
      [4,0],                             [4,5],
      [5,0], [5,1], [5,2], [5,3], [5,4], [5,5]
    ];

    let board = Board.create({ rowCount: 6, columnCount: 6 });

    wall.forEach(([row, column]) => {
      board.pushCell(board.createWall(row, column));
    });

    let box = board.createBox(2, 3);
    board.pushCell(box);
    this.set('box', box);

    return board;
  }),

  player: computed(function() {
    return Player.create({
      row: 3,
      column: 0
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
    this.set('player.direction', 'left');

    this.move(row, column, [0,-1]);
  },

  right() {
    let row = this.get('player.row');
    let column = this.get('player.column') + 1;
    this.set('player.direction', 'right');

    this.move(row, column, [0,1]);
  },

  isEmpty(row, column) {
    let board = this.get('board');

    return board.isInsideLimits(row, column) &&
      !board.at(row, column).get('occupiesSpace');
  },

  canBeMoved(row, column) {
    let board = this.get('board');

    return board.at(row, column).get('canBeMoved');
  },

  move(row, column, [offsetRow, offsetColumn]) {
    if (this.get('won')) {
      return;
    }

    let player = this.get('player');

    if (this.isEmpty(row, column)) {
      player.moveTo(row, column);
    } else if (this.canBeMoved(row, column)) {
      if (this.tryMoveBox({ row, column } , { row: row + offsetRow, column: column + offsetColumn })) {
        player.moveTo(row, column);
      } else {
        debug('cannot be moved');
      }
    } else {
      debug('is wall');
    }
  },

  tryMoveBox(origin, target) {
    if (this.isEmpty(target.row, target.column)) {
      this.get('board').at(origin.row, origin.column).moveTo(target.row, target.column);
      return true;
    }
  },

  won: computed('box.{row,column}', function() {
    return this.get('box.row') === this.get('targetRow') &&
      this.get('box.column') === this.get('targetColumn');
  })
});
