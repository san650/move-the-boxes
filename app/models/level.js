import Ember from 'ember';
import Player from 'sokoban/models/player';
import Board from 'sokoban/models/board';

const { computed, debug } = Ember;

export default Ember.Object.extend({
  board: computed(function() {
    let board = Board.create({ rowCount: 5, columnCount: 5 });

    board.setWall([
      [0,0], [0,1], [0,2], [0,3], [0,4],
      [1,0],                      [1,4],
                    [2,2],        [2,4],
      [3,0],                      [3,4],
      [4,0], [4,1], [4,2], [4,3], [4,4]
    ]);

    return board;
  }),

  player: computed(function() {
    return Player.create({
      row: 2,
      column: 0
    });
  }),

  up() {
    let row = this.get('player.row') - 1;
    let column = this.get('player.column');

    this.move(row, column);
  },

  down() {
    let row = this.get('player.row') + 1;
    let column = this.get('player.column');

    this.move(row, column);
  },

  left() {
    let row = this.get('player.row');
    let column = this.get('player.column') - 1;

    this.move(row, column);
  },

  right() {
    let row = this.get('player.row');
    let column = this.get('player.column') + 1;

    this.move(row, column);
  },

  move(row, column) {
    if (row < 0 || column < 0) {
      return;
    }

    if (row === this.get('board.rowCount') || column === this.get('board.columnCount')) {
      return;
    }

    if (this.get('board.cells')[row][column].get('isGround')) {
      this.set('player.row', row);
      this.set('player.column', column);
    } else {
      debug('wall');
    }
  }
});
