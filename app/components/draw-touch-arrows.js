import Ember from 'ember';
import Cell from 'move-the-boxes/models/cells/cell';

const { computed } = Ember;

const TouchArrowUp = Cell.extend({
  kind: ['touch-arrow'],
  direction: 'up',
  column: computed.alias('player.column'),
  row: computed('player.row', function() {
    return this.get('player.row') - 1;
  })
});

const TouchArrowRight = Cell.extend({
  kind: ['touch-arrow'],
  direction: 'right',
  row: computed.alias('player.row'),
  column: computed('player.column', function() {
    return this.get('player.column') + 1;
  })
});

const TouchArrowDown = Cell.extend({
  kind: ['touch-arrow'],
  direction: 'down',
  column: computed.alias('player.column'),
  row: computed('player.row', function() {
    return this.get('player.row') + 1;
  })
});

const TouchArrowLeft = Cell.extend({
  kind: ['touch-arrow'],
  direction: 'left',
  row: computed.alias('player.row'),
  column: computed('player.column', function() {
    return this.get('player.column') - 1;
  })
});

const Component = Ember.Component.extend({
  tagName: '',

  touchArrowUp: computed('player', function() {
    return TouchArrowUp.create({
      player: this.get('player')
    });
  }),

  touchArrowRight: computed('player', function() {
    return TouchArrowRight.create({
      player: this.get('player')
    });
  }),

  touchArrowDown: computed('player', function() {
    return TouchArrowDown.create({
      player: this.get('player')
    });
  }),

  touchArrowLeft: computed('player', function() {
    return TouchArrowLeft.create({
      player: this.get('player')
    });
  }),

  actions: {
    onClick(direction) {
      this.attrs.onMove(direction);
    }
  }
});

Component.reopenClass({
  positionalParams: ['player']
});

export default Component;
