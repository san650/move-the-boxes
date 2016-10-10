import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/' }, function() {
    this.route('level', { path: ':level', resetNamespace: true });
  });
});

export default Router;
