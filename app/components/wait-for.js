import Ember from 'ember';

const { run } = Ember;

const Component = Ember.Component.extend({
  tagName: null,
  didInsertElement() {
    // this._super.didInsertElement(...arguments);
    run.later(this, this.done, this.get('timeout') || 1000);
  },

  done() {
    this.attrs.onDone();
  }
});

Component.reopenClass({
  positionalParams: ['timeout']
});

export default Component;
