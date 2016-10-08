import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['board'],
  attributeBindings: ['style'],
  style: computed('board.{rowCount,columnCount}', function() {
    let width = SIZE * this.get('board.columnCount');
    let height = SIZE * this.get('borad.rowCount');

    return `width:${width}px;height:${height}`;
  })
});

Component.reopenClass({
  positionalParams: ['board']
});

export default Component;
