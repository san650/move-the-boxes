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

    let target = board.createTarget(3, 1);
    board.pushCell(target);
    this.set('target', target);

    return board;
  }),

  player: computed(function() {
    return Player.create({
      row: 3,
      column: 0
    });
  }),

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

  move(row, column, [offsetRow, offsetColumn]) {
    if (this.get('won')) {
      return;
    }

    let board = this.get('board');
    let player = this.get('player');

    if (board.isEmpty(row, column)) {
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

  canBeMoved(row, column) {
    let board = this.get('board');

    return board.at(row, column).get('canBeMoved');
  },

  tryMoveBox(origin, target) {
    let board = this.get('board');

    if (board.isEmpty(target.row, target.column)) {
      board.at(origin.row, origin.column).moveTo(target.row, target.column);

      return true;
    }
  },

  won: computed('player.{row,column}', function() {
    return this.get('board').targetsFulfilled();
  })
});
