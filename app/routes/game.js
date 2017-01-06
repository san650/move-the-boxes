import Ember from 'ember';
import Game from 'move-the-boxes/models/game';

export default Ember.Route.extend({
  model() {
    return Game.create();
  },

  setupController(controller, model) {
    controller.set('game', model);
    controller.set('size', model.size);
  },
});
