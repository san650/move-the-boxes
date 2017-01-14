import Ember from 'ember';
import Game from 'move-the-boxes/models/game';

const { inject } = Ember;

export default Ember.Route.extend({
  score: inject.service(),
  directory: inject.service(),

  beforeModel() {
    return this.get('directory').fetchLevels();
  },

  model() {
    return Game.create();
  },

  setupController(controller, model) {
    controller.set('game', model);
    controller.set('size', model.size);
  }
});
