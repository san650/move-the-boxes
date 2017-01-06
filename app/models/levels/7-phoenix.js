import Ember from 'ember';
import Level from 'move-the-boxes/models/level';
import Forgery from 'move-the-boxes/mixins/forgery';

const { computed } = Ember;

const MAP = `
~~~~~~~~~~~~~~XXXXXXXX
~~~~~~~~~~~~~~X  ....X
~~~XXXXXXXXXXXX  ....X
~~~X    X  * *   ....X
~~~X ***X*  * X  ....X
~~~X  *     * X  ....X
~~~X ** X* * *XXXXXXXX
XXXX  * X     X~~~~~~~
X   X XXXXXXXXX~~~~~~~
X    *  XX~~~~~~~~~~~~
X **X** @X~~~~~~~~~~~~
X   X   XX~~~~~~~~~~~~
XXXXXXXXX~~~~~~~~~~~~~
`;

export default Level.extend(Forgery, {
  minMoves: 300,
  zoom: 0.6,

  board: computed(function() {
    return this.boardFromString(MAP);
  }),

  player: computed(function() {
    return this.playerFromString(MAP);
  })
});
