import Ember from 'ember';
import preference from 'ember-preferences/computed';
import PreferencesMixin from 'ember-preferences/mixin';

export default Ember.Service.extend(PreferencesMixin, {
  totalMoves: preference('totalMoves', { defaultValue: 0 }),
  levelMoves: preference('levelMoves', { defaultValue: 0 }),

  resetLevelMoves() {
    this.set('levelMoves', 0);
  },

  countMove() {
    this.incrementProperty('totalMoves');
    this.incrementProperty('levelMoves');
  },

  reset() {
    this.set('totalMoves', 0);
    this.set('levelMoves', 0);
  }
});
