import Ember from 'ember';
import Level from 'sokoban/models/level';

const { computed } = Ember;

export default Ember.Object.extend({
  classNames: ['game'],

  level: computed(function() {
    return Level.create();
  })
});
