import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  score: inject.service(),
  directory: inject.service(),

  beforeModel() {
    this.get('score').resetLevelMoves();
  },

  model(params) {
    let level = this.get('directory').find(params.slug);

    if (level) {
      return level;
    }

    // if there isn't any level this causes an infinite loop
    return this.transitionTo('game');
  },

  setupController(controller, model) {
    controller.set('level', model);
  },

  actions: {
    transitionToCompleted(slug) {
      this.transitionTo('level.completed', slug);
    }
  }
});
