import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('rental');
    // findAll takes 1 arg (model type)
    // findAll fetches all records of that type from the store 
  }
}

// export default class IndexRoute extends Route {
//     async model(){
//         // model hook/method fetches any data for the route
//         let response = await fetch(`/api/rentals.json`);
//         // the Browser's fetch API requests the JSON data from our server's API at "public/api/rentals.json"
//         let { data } = await response.json();
//         // parsing JSON data 

//         return data.map(model => {
//             let { id, attributes } = model;
//             // extracting the nested attributes object
//             let type;

//             if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
//                 type = 'Community';
//               } else {
//                 type = 'Standalone';
//               }

//               return { id, type, ...attributes };
//             // added back the missing type attribute
//         })
//     }
// }