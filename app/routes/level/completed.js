import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  model() {
    return this.modelFor('level');
  },

  setupController(controller, model) {
    controller.set('level', model);
    controller.set('hasNextLevel', this.get('directory').hasNext(model.get('slug')));
  },

  actions: {
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
