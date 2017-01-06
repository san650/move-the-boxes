import Ember from 'ember';

const { computed, inject } = Ember;

const Component = Ember.Component.extend({
  classNames: ['score-board'],
  score: inject.service(),

  levelName: computed('level.slug', function() {
    return this.get('level.slug').capitalize();
  })
});

Component.reopenClass({
  positionalParams: ['level']
});

export default Component;
