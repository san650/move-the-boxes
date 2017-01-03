import Ember from 'ember';
import DrawCell from 'sokoban/components/draw-cell';
import { EKMixin, getCode, keyDown } from 'ember-keyboard';
import hbs from 'htmlbars-inline-precompile';
import { task, timeout } from 'ember-concurrency';

const { on } = Ember;

export default DrawCell.extend(EKMixin, {
  layout: hbs`<span class="kind--player-img"></span>`,
  classNameBindings: ['walk', 'walkInvert'],

  activateKeyboard: on('init', function() {
    this.set('keyboardActivated', true);
  }),

  moveTask: task(function * (direction) {
    this.attrs.onMove(direction);
    yield timeout(100);
  }).drop(),

  walkAnimationTask: task(function * () {
    this.set('walk', true);
    this.toggleProperty('walkInvert');
    yield timeout(300);
    this.set('walk', false);
  }).drop(),

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

    this.get('moveTask').perform(direction);
    this.get('walkAnimationTask').perform();
  })
});
