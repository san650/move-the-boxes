import Ember from 'ember';
import Level from 'sokoban/models/level';
import {
  createBoard,
  createBox,
  createPlayer,
  createTarget,
  createWall,
  createWater
} from 'sokoban/models/factory';

const { computed } = Ember;

export default Level.extend({
  minMoves: 29,

  board: computed(function() {
    let map = `
      ##############
      ##xx  ##  xx##
      ##  oo  oo  ##
      ##  ww  ww  ##
      ##  oo      ##
      ##    ##  xx##
      ##############
    `;

    let lines = map
      .split('\n')
      .filter(s => !/^\s*$/.test(s))
      .map(s => s.replace(/^\s*/, ''))
      .map(s => s.replace(/(.)\1/g, '$1'));

    let board = createBoard(lines.length, lines[0].length);

    for(let j = 0; j < lines.length; j++) {
      for(let i = 0; i < lines[j].length; i++) {
        let c = lines[j][i];

        switch(c) {
          case '#':
            board.pushCell(createWall(j, i));
          break;
          case 'x':
            board.pushCell(createTarget(j, i));
          break;
          case 'o':
            board.pushCell(createBox(j, i));
          break;
          case 'w':
            board.pushCell(createWater(j, i));
          break;
        }
      }
    }

    return board;
  }),

  player: computed(function() {
    return createPlayer(3, 1);
  })
});
