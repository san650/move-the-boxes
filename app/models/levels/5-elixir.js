import Ember from 'ember';
import Level from 'sokoban/models/level';
import Forgery from 'sokoban/mixins/forgery';

const { computed } = Ember;

const MAP = `
~~~~X   X~~~~~~~~~
~~~~X*  X~~~~~~~~~
~~~XX  *XXX~~~~~~~
~~X  *  * X~~~~~~~
~XX X XXX X~~~XXXX
X   X XXX XXXX  ..
X *  *          ..
XXXXX XXXX X@X  ..
~~~~X      XXXXXXX
`;

export default Level.extend(Forgery, {
  minMoves: 13,
  zoom: 0.8,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
