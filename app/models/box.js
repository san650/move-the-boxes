import Ember from 'ember';
import Cell from 'sokoban/models/cell';

const { computed } = Ember;

export default Cell.extend({
  kind: ['npc', 'box'],

  canBeMoved: computed(function() {
    return true;
  })
});
