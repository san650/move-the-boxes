import Ember from 'ember';
import Game from 'sokoban/models/game';
import { SIZE } from 'sokoban/size';

export default Ember.Route.extend({
  model() {
    return Game.create();
  },

  setupController(controller, model) {
    controller.set('game', model);
    controller.set('level', model.level);
    controller.set('size', SIZE);
  },

  actions: {
    move(level, direction) {
      level[direction]();
    }
  }
});
