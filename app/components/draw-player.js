import Ember from 'ember';
import { SIZE } from 'sokoban/size';
import { EKMixin } from 'ember-keyboard';
import { getCode, keyDown } from 'ember-keyboard';

const { computed, on } = Ember;

const Component = Ember.Component.extend(EKMixin, {
  classNames: ['cell', 'player'],
  classNameBindings: ['player.direction'],
  attributeBindings: ['style'],
  style: computed('player.{row,column}', function() {
    let left = SIZE * this.get('player.column');
    let top = SIZE * this.get('player.row');

    return `left:${left}px;top:${top}px`;
  }),

  activateKeyboard: Ember.on('init', function() {
    this.set('keyboardActivated', true);
  }),

  move: on(
    keyDown('ArrowUp'),
    keyDown('ArrowDown'),
    keyDown('ArrowLeft'),
    keyDown('ArrowRight'),

    keyDown('KeyK'),
    keyDown('KeyJ'),
    keyDown('KeyL'),
    keyDown('KeyH'), function(event) {
    let direction;

    switch(getCode(event)) {
      case 'ArrowUp':
      case 'KeyK':
        direction = 'up';
        break;
      case 'ArrowDown':
      case 'KeyJ':
        direction = 'down';
        break;
      case 'ArrowLeft':
      case 'KeyH':
        direction = 'left';
        break;
      case 'ArrowRight':
      case 'KeyL':
        direction = 'right';
        break;
    }

    this.attrs.onMove(direction);
  })
});

Component.reopenClass({
  positionalParams: ['player']
});

export default Component;
