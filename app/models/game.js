import Ember from 'ember';
import { SIZE } from 'move-the-boxes/size';

const { computed } = Ember;

export default Ember.Object.extend({
  size: computed(function() {
    return SIZE;
  })
});
