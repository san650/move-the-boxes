import Ember from 'ember';
import Tutorial from 'move-the-boxes/models/levels/0-tutorial';
import Escape from 'move-the-boxes/models/levels/1-escape';
import Dune from 'move-the-boxes/models/levels/2-dune';
import Herodoto from 'move-the-boxes/models/levels/3-herodoto';
import Ninja from 'move-the-boxes/models/levels/4-ninja';
import Elixir from 'move-the-boxes/models/levels/5-elixir';
import Pollock from 'move-the-boxes/models/levels/6-pollock';
import Phoenix from 'move-the-boxes/models/levels/7-phoenix';

const LEVELS = [
  Tutorial,
  Escape,
  Dune,
  Herodoto,
  Ninja,
  Elixir,
  Pollock,
  Phoenix
];

const { inject } = Ember;

export default Ember.Route.extend({
  score: inject.service(),

  beforeModel() {
    this.get('score').resetLevelMoves();
  },

  model(params) {
    let levelClass = LEVELS.findBy('slug', params.level) || LEVELS[0];

    if (levelClass) {
      return levelClass.create();
    }

    this.transitionTo('game');
  },

  setupController(controller, model) {
    controller.set('level', model);
    controller.set('hasNextLevel', model.constructor !== LEVELS[LEVELS.length - 1]);
  },

  actions: {
    move(level, direction) {
      if(level[direction]()) {
        this.get('score').countMove();
      }
    },

    nextLevel(current) {
      let index = LEVELS.indexOf(current.constructor);
      let next = LEVELS[index+1];

      if (next) {
        this.transitionTo('level', next.slug);
      } else {
        this.transitionTo('game');
      }
    }
  }
});
