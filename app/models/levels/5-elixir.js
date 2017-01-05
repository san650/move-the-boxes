import Ember from 'ember';
import Level from 'sokoban/models/level';
import Forgery from 'sokoban/mixins/forgery';

const { computed } = Ember;

const MAP = `
XXXXX   XXXXXXXXXXXXX
XXXXX*  XXXXXXXXXXXXX
XXXXX  *XXXXXXXXXXXXX
XXX  *  * XXXXXXXXXXX
XXX X XXX XXXXXXXXXXX
X   X XXX XXXXXXX  ..
X *  *             ..
XXXXX XXXX X@XXXX  ..
XXXXX      XXX  XXXXX
`;

export default Level.extend(Forgery, {
  minMoves: 13,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
