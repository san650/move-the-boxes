import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  score: inject.service(),

  redirect() {
    this.get('score').reset();

    this.transitionTo('level', 'tutorial');
  }
});
