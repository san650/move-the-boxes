import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  // Configuration
  concatenatedProperties: ['kind'],

  // Attributes
  row: null,
  column: null,

  // Properties
  kind: ['cell'],

  occupiesSpace: computed(function() {
    return true;
  }),

  canBeMoved: computed(function() {
    return false;
  }),

  // Methods
  moveTo(row, column) {
    if (this.get('canBeMoved')) {
      this.setProperties({ row, column });
    }
  }
});
