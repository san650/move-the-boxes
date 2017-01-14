import Ember from 'ember';
import extendLevel from 'move-the-boxes/models/level';
import Forgery from 'move-the-boxes/mixins/forgery';

const { inject, computed } = Ember;

function generateLevel(definition){
  return extendLevel(definition.slug, Forgery, {
    minMoves: definition.minMoves,
    zoom: definition.zoom,

    board: computed(function() {
      return this.boardFromString(definition.map);
    }),

    player: computed(function() {
      return this.playerFromString(definition.map);
    })
  }).create();
}

export default Ember.Service.extend({
  ajax: inject.service(),

  fetchLevels() {
    return this.get('ajax').request("/levels.json").then((data) => {
      this.set('data', data);
    });
  },

  find(slug) {
    let level;

    if (slug) {
      level = this.get('data').findBy('slug', slug);
    } else {
      level = this.get('data')[0];
    }

    return level && generateLevel(level);
  },

  hasNext(previousSlug) {
    return !!this.findNext(previousSlug);
  },

  findNext(previousSlug) {
    let index = this.get('data').findIndex((e) => e.slug === previousSlug);
    let level = this.get('data')[index + 1];

    return level && generateLevel(level);
  }
});
