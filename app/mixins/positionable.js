import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  x: computed.readOnly('_x'),
  y: computed.readOnly('_y'),

  incrementX(n) {
    return this.incrementProperty('_x', n);
  },

  decrementX(n) {
    return this.decrementProperty('_x', n);
  },

  incrementY(n) {
    return this.incrementProperty('_y', n);
  },

  decrementY(n) {
    return this.decrementProperty('_y', n);
  }
});
