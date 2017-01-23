import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  score: inject.service(),

  model() {
    return this.modelFor('level');
  },

  setupController(controller, model) {
    controller.set('level', model);
  },

  actions: {
    move(level, direction) {
      if(level[direction]()) {
        this.get('score').countMove();
      }
    }
  }
});
