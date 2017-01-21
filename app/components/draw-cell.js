import Ember from 'ember';
import { SIZE } from 'move-the-boxes/size';

const { computed } = Ember;
const VARIANT_COUNT = 10;

const Component = Ember.Component.extend({
  classNames: ['cell'],
  classNameBindings: ['cellType', 'cell.direction', 'cell.isFulfilled', 'variant'],
  attributeBindings: ['style'],

  style: computed('cell.{row,column}', function() {
    let left = SIZE * this.get('cell.column');
    let top = SIZE * this.get('cell.row');

    return `left:${left}px;top:${top}px`;
  }),

  cellType: computed('cell', function() {
    return this.get('cell.kind').map((kind) => `kind--${kind}`).join(' ');
  }),

  variant: computed(function() {
    let variant = Math.round(Math.random(VARIANT_COUNT) * VARIANT_COUNT);

    return `kind--variant-${variant}`;
  }),

  click() {
    if (this.get('on-click')) {
      this.attrs['on-click']();
    }
  }
});

Component.reopenClass({
  positionalParams: ['cell']
});

export default Component;
