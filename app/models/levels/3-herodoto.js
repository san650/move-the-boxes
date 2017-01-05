import Ember from 'ember';
import Level from 'sokoban/models/level';
import Forgery from 'sokoban/mixins/forgery';

const { computed } = Ember;

const MAP = `
XXXXXXX
X. X .X
X * * X
X@w w X
X *   X
X  X .X
XXXXXXX
`;

export default Level.extend(Forgery, {
  minMoves: 29,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
