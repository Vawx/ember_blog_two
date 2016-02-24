import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('admin');
  this.route('contact');
  this.route('new-post-form');
  this.route('post-page', {path: '/post-page/:post_id' });
});

export default Router;
