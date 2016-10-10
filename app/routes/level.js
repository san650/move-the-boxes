import Ember from 'ember';
import Tutorial from 'sokoban/models/levels/0-tutorial';
import Escape from 'sokoban/models/levels/1-escape';
import Dune from 'sokoban/models/levels/2-dune';

const Levels = {
  tutorial: Tutorial,
  escape: Escape,
  dune: Dune
};

export default Ember.Route.extend({
  model(params) {
    return Levels[params.level].create();
  },

  setupController(controller, model) {
    let slug;

    if (model.constructor === Tutorial) {
      slug = 'escape';
    } else if (model.constructor === Escape) {
      slug = 'dune';
    }

    controller.set('level', model);
    controller.set('nextLevel', slug);
  },

  actions: {
    move(level, direction) {
      level[direction]();
    }
  }
});
