import Ember from 'ember';
import Cell from './cell';

const { computed } = Ember;

export default Cell.extend({
  // Properties
  kind: ['player'],

  direction: 'right',

  canBeMoved: computed(function() {
    return true;
  })
});
