import Ember from 'ember';

const { inject, computed } = Ember;

export default Ember.Route.extend({
  score: inject.service(),
  directory: inject.service(),

  levels: computed.alias('score.levels'),

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
    controller.set('hasNextLevel', this.get('directory').hasNext(model.get('slug')));
  },

  actions: {
    move(level, direction) {
      if(level[direction]()) {
        this.get('score').countMove();
      }
    },

    nextLevel(current) {
      let next = this.get('directory').findNext(current.get('slug'));
      if (next) {
        this.transitionTo('level', next.get('slug'));
      } else {
        this.transitionTo('game');
      }
    }
  }
});
