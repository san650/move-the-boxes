import Ember from 'ember';
import extendLevel from 'move-the-boxes/models/level';
import Forgery from 'move-the-boxes/mixins/forgery';

const { computed } = Ember;

const MAP = `
XXXXXX
X.>  X
X X  X
X@ * X
X   XX
XXXXXX
`;

export default extendLevel('ninja', Forgery, {
  minMoves: 13,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
