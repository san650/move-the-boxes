import Ember from 'ember';
import {
  createArrow,
  createBoard,
  createBox,
  createPlayer,
  createTarget,
  createVoid,
  createWall,
  createWater
} from 'sokoban/models/factory';

export default Ember.Mixin.create({
  mapFromString(string) {
    return string
      .split('\n')
      .filter(s => !/^\s*$/.test(s));
  },

  boardFromString(string) {
    let map = this.mapFromString(string);
    let board = createBoard(map.length, map[0].length);

    for(let j = 0; j < map.length; j++) {
      for(let i = 0; i < map[j].length; i++) {
        let c = map[j][i];

        switch(c) {
          case 'X':
            board.pushCell(createWall(j, i));
          break;
          case '.':
            board.pushCell(createTarget(j, i));
          break;
          case '*':
            board.pushCell(createBox(j, i));
          break;
          case 'w':
            board.pushCell(createWater(j, i));
          break;
          case '>':
            board.pushCell(createArrow(j, i, 'right'));
          break;
          case '<':
            board.pushCell(createArrow(j, i, 'left'));
          break;
          case '~':
            board.pushCell(createVoid(j, i));
        }
      }
    }

    return board;
  },

  playerFromString(string) {
    let map = this.mapFromString(string);
    let i = 0;
    let j = 0;

    do {
      j = map[i].indexOf('@');

      if (j > -1) {
        break;
      }

      i++;
    } while(i < map.length);

    return createPlayer(i, j);
  }
});
