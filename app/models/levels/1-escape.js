import Ember from 'ember';
import Level from 'sokoban/models/level';
import {
  createBoard,
  createBox,
  createPlayer,
  createTarget,
  createWall
} from 'sokoban/models/factory';

const { computed } = Ember;

export default Level.extend({
  board: computed(function() {
    let wall = [
      [0,0], [0,1], [0,2], [0,3]              ,
      [1,0]                                   ,
      [2,0]                                   ,
                           [3,3],        [3,5],
      [4,0],                             [4,5],
      [5,0], [5,1], [5,2], [5,3], [5,4], [5,5]
    ];

    let board = createBoard(6, 6);

    wall.forEach(([row, column]) => {
      board.pushCell(createWall(row, column));
    });

    board.pushCell(createBox(2, 3));
    board.pushCell(createBox(1, 3));
    board.pushCell(createTarget(3, 1));
    board.pushCell(createTarget(3, 4));

    return board;
  }),

  player: computed(function() {
    return createPlayer(3, 0);
  })
});
