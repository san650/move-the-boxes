import Ember from 'ember';

export default Ember.Object.extend({
  // Configuration
  concatenatedProperties: ['kind'],

  // Attributes
  row: null,
  column: null,

  // Properties
  kind: ['cell'],

  hasMass: false,
  isMobile: false,
  isTarget: false,
  isBox: false,

  // Methods
  canBeOccupiedBy(/*by*/) {
    return !this.get('hasMass');
  },

  canBeMoved(by, to) {
    return this.get('isMobile') && to.canBeOccupiedBy(this);
  },

  move(to) {
    if (this.get('hasMass') && this.get('isMobile')) {
      this.setProperties({
        row: to.get('row'),
        column: to.get('column')
      });
    }
  }
});
