import Ember from 'ember';

const { computed } = Ember;

const Component = Ember.Component.extend({
  classNames: ['level-over'],

  image: computed('level.moves', 'level.minMoves', function() {
    let moves = this.get('level.moves');
    let minMoves = this.get('level.minMoves');
    let diff = moves - minMoves;

    if (diff > 3) {
      diff = 3;
    } else if (diff < 0) {
      diff = 0;
    }

    return `level-over--reward__${diff}`;
  })
});

Component.reopenClass({
  positionalParams: ['level']
});

export default Component;
