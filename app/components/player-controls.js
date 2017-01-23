import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const Component = Ember.Component.extend({
  tagName: null,

  moveTask: task(function * (direction) {
    this.attrs.onMove(direction);
    yield timeout(200);
  }).keepLatest(),

  walkAnimationTask: task(function * () {
    this.set('cell.walk', true);
    yield timeout(66);
    this.set('cell.walk', false);
    yield timeout(66);
    this.set('cell.walk', true);
    this.toggleProperty('cell.walkInvert');
    yield timeout(66);
    this.set('cell.walk', false);
  }).drop(),

  actions: {
    move(direction) {
      if (!this.get('level.won')) {
        this.get('moveTask').perform(direction);
        this.get('walkAnimationTask').perform();
      }
    }
  }
});

Component.reopenClass({
  positionalParams: ['cell']
});

export default Component;
