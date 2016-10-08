import Ember from 'ember';
import Player from 'sokoban/models/player';
import Board from 'sokoban/models/board';

const { computed } = Ember;

export default Ember.Object.extend({
  board: computed(function() {
    let board = Board.create({ rowCount: 5, columnCount: 5 });

    board.setGround([
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
  })
});
