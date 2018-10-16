import Ember from 'ember';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['container--inner'],
  attributeBindings: ['style'],

  style: computed('level.zoom', function() {
    let level = this.get('level');

    return `transform: scale(${level.zoom})`.htmlSafe();
  })
});

Component.reopenClass({
  positionalParams: ['level']
});

export default Component;
