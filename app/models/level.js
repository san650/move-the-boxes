import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  board: null,
  player: null,
  zoom: 1,
  minMoves: 2,
  moves: 0,

  won: computed('player.{row,column}', function() {
    return this.get('board').targetsFulfilled();
  }),

  up() {
    let row = this.get('player.row') - 1;
    let column = this.get('player.column');
    this.set('player.direction', 'up');

    this.move(row, column, [-1,0]);
  },

  down() {
    let row = this.get('player.row') + 1;
    let column = this.get('player.column');
    this.set('player.direction', 'down');

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
    let to = board.at(row, column);
    let side = board.at(row + offsetRow, column + offsetColumn);

    if (board.isInsideLimits(row, column)) {
      if (to.canBeOccupiedBy(player)) {
        this.incrementProperty('moves');
        player.move(to);
        board.targetsFulfilled();
      } else {
        if (board.isInsideLimits(row + offsetRow, column + offsetColumn) && to.canBeMoved(player, side)) {
          this.incrementProperty('moves');
          player.move(to);
          to.move(side);
          board.targetsFulfilled();
        }
      }
    }
  }
});
