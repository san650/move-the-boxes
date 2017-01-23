import Ember from 'ember';
import { task } from 'ember-concurrency';
import { waitAnimation } from 'move-the-boxes/utils/wait-animation';

const { $ } = Ember;

const Component = Ember.Component.extend({
  tagName: '',

  moveTask: task(function * (direction) {
    this.attrs.onMove(direction);
    yield waitAnimation($('.kind--player'), 'walk');
  }).keepLatest(),

  actions: {
    move(direction) {
      if (!this.get('level.won')) {
        this.get('moveTask').perform(direction);
      }
    }
  }
});

Component.reopenClass({
  positionalParams: ['cell']
});

export default Component;
