// router file manages what pages are available 
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about'); 
  this.route('contact', {path: '/getting-in-touch'});
  // note: explicitly specified a path for the contact route
  this.route('rental', {path: '/rentals/:rental_id'});
  // specifying a custom path & adding a dynamic segment 
});
