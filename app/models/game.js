import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

export default Ember.Object.extend({
  size: computed(function() {
    return SIZE;
  })
});
