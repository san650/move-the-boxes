import Ember from 'ember';
import Tutorial from 'sokoban/models/levels/0-tutorial';
import Escape from 'sokoban/models/levels/1-escape';

const Levels = {
  tutorial: Tutorial,
  escape: Escape
};

export default Ember.Route.extend({
  model(params) {
    return Levels[params.level].create();
  },

  setupController(controller, model) {
    let slug = model.constructor === Tutorial ? 'escape' : null;

    controller.set('level', model);
    controller.set('nextLevel', slug);
  },

  actions: {
    move(level, direction) {
      level[direction]();
    }
  }
});
