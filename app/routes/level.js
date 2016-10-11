import Ember from 'ember';
import Tutorial from 'sokoban/models/levels/0-tutorial';
import Escape from 'sokoban/models/levels/1-escape';
import Dune from 'sokoban/models/levels/2-dune';
import Herodoto from 'sokoban/models/levels/3-herodoto';

const Levels = {
  tutorial: Tutorial,
  escape: Escape,
  dune: Dune,
  herodoto: Herodoto
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
    } else if (model.constructor === Dune) {
      slug = 'herodoto';
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
