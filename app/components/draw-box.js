import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['cell', 'box'],
  attributeBindings: ['style'],
  style: computed('box.{row,column}', function() {
    let left = SIZE * this.get('box.column');
    let top = SIZE * this.get('box.row');

    return `left:${left}px;top:${top}px`;
  })
});

Component.reopenClass({
  positionalParams: ['box']
});

export default Component;
