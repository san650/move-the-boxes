import Ember from 'ember';

const { inject, on } = Ember;

export default Ember.Component.extend({
  metrics: inject.service(),

  tagName: '',

  track: on('didInsertElement', function() {
    this.get('metrics').trackEvent({
      action: this.get('action'),
      label: this.get('label'),
      value: this.get('value')
    });
  })
});
