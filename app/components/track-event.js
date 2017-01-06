import Ember from 'ember';

const { inject, on } = Ember;

export default Ember.Component.extend({
  metrics: inject.service(),

  tagName: '',

  track: on('didInsertElement', function() {
    let level = this.get('level');

    if (level.get('won')) {
      this.get('metrics').trackEvent({
        action: 'finish level',
        label: level.get('slug'),
        value: level.get('moves')
      });
    }
  })
});
