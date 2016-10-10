import Ember from 'ember';
import Cell from './cell';

const { computed } = Ember;

export default Cell.extend({
  kind: ['npc', 'box'],

  isBox: computed(function() {
    return true;
  }),

  canBeMoved: computed(function() {
    return true;
  })
});
