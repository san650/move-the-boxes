import Ember from 'ember';
import Ground from './ground';

const { computed } = Ember;

export default Ground.extend({
  kind: ['target'],

  isTarget: computed(function() {
    return true;
  })
});
