import Ember from 'ember';
import Cell from './cell';

const { computed } = Ember;

export default Cell.extend(Ember.Enumerable, {
  // Attributes
  cells: null,

  // Properties
  length: computed.readOnly('cells.length'),

  kind: computed('cells.[]', function() {
    return flat(this.get('cells').mapBy('kind')).uniq();

    function flat(arr) {
      return arr.inject((result, item) => result.concat(item), []);
    }
  }),

  hasMass: computed(function() {
    return this.get('cells').isAny('hasMass');
  }),

  isMobile: computed(function() {
    let withMass = this.get('cells').filterBy('hasMass');

    // Has at least one element with mass and all element with mass are mobile
    return withMass.length > 0 && withMass.isEvery('isMobile');
  }),

  // Methods
  canBeOccupiedBy(by) {
    return this.get('cells').every((cell) => cell.canBeOccupiedBy(by));
  },

  canBeMoved(by, to) {
    let withMass = this.get('cells').filterBy('hasMass');

    return this.get('isMobile') && withMass.every((cell) => to.canBeOccupiedBy(cell));
  },

  move(row, column) {
    this.get('cells').forEach((cell) => cell.move(row, column));
  },

  nextObject(index) {
    return this.get('cells')[index];
  }
});
