import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['cell', 'player'],
  attributeBindings: ['style'],
  style: computed('player.{row,column}', function() {
    let left = SIZE * this.get('player.column');
    let top = SIZE * this.get('player.row');

    return `left:${left}px;top:${top}px`;
  })
});

Component.reopenClass({
  positionalParams: ['player']
});

export default Component;
