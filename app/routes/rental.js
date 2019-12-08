import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;
  // Ember data provides a store service. Provides "find, findAll methods"

  async model(params) {
    return this.store.find('rental', params.rental_id);
    // find takes 2 args (model type, model ID)
    // find fetches a single record from the store 
  }
}
 // "params" object passes rental_id to the model hook