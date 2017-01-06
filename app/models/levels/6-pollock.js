import Ember from 'ember';
import Level from 'sokoban/models/level';
import Forgery from 'sokoban/mixins/forgery';

const { computed } = Ember;

const MAP = `
~~~~~~~~XXXXXXXX~
~~~~~~~~X     @X~
~~~~~~~~X *X* XX~
~~~~~~~~X *  *X~~
~~~~~~~~XX* * X~~
XXXXXXXXX * X XXX
X....  XX *  *  X
XX...    *  *   X
X....  XXXXXXXXXX
XXXXXXXX~~~~~~~~~
`;

export default Level.extend(Forgery, {
  minMoves: 13,
  zoom: 0.6,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
