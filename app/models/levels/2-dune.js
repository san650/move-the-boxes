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
      [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6],
      [1,0], [1,1]                                   ,
      [2,0]                                          ,
                           [3,3], [3,4],        [3,6],
      [4,0],               [4,3], [4,4],        [4,6],
      [5,0], [5,1],               [5,4],        [5,6],
      [6,0], [6,1], [6,2]                            ,
      [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6],
    ];

    let board = createBoard(8, 7);

    wall.forEach(([row, column]) => {
      board.pushCell(createWall(row, column));
    });

    board.pushCell(createBox(2, 2));
    board.pushCell(createBox(2, 4));
    board.pushCell(createTarget(6, 5));
    board.pushCell(createTarget(6, 6));

    return board;
  }),

  player: computed(function() {
    return createPlayer(3, 0);
  })
});
