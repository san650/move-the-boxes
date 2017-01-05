import Ember from 'ember';
import Tutorial from 'sokoban/models/levels/0-tutorial';
import Escape from 'sokoban/models/levels/1-escape';
import Dune from 'sokoban/models/levels/2-dune';
import Herodoto from 'sokoban/models/levels/3-herodoto';
import Ninja from 'sokoban/models/levels/4-ninja';
import Elixir from 'sokoban/models/levels/5-elixir';
import Pollock from 'sokoban/models/levels/6-pollock';

const Levels = {
  tutorial: Tutorial,
  escape: Escape,
  dune: Dune,
  herodoto: Herodoto,
  ninja: Ninja,
  elixir: Elixir,
  pollock: Pollock
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
    } else if (model.constructor === Herodoto) {
      slug = 'ninja';
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
