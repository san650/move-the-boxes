import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  classNames: ['score-board'],
  score: inject.service()
});
