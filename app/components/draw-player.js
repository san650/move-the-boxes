import Ember from 'ember';
import DrawCell from 'sokoban/components/draw-cell';
import { EKMixin, getCode, keyDown } from 'ember-keyboard';

const { on } = Ember;

export default DrawCell.extend(EKMixin, {
  activateKeyboard: on('init', function() {
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
