import Ember from 'ember';
import { SIZE } from 'sokoban/size';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['board', 'clearfix'],
  attributeBindings: ['style'],
  style: computed('board.{rowCount,columnCount}', function() {
    let width = SIZE * this.get('board.columnCount');
    let height = SIZE * this.get('board.rowCount');
    let zoom = this.get('zoom');

    if (zoom !== 1) {
      zoom = `transform:scale(${zoom});transform-origin(0,0);`;
    } else {
      zoom = "";
    }

    return `width:${width}px;height:${height}px;${zoom}`;
  })
});

Component.reopenClass({
  positionalParams: ['board']
});

export default Component;
