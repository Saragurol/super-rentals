import Route from '@ember/routing/route'

const COMMUNITY_CATEGORIES = [
    'Condo',
    'Townhouse',
    'Apartment'
  ];

export default class IndexRoute extends Route {
    async model(){
        // model hook/method fetches any data for the route
        let response = await fetch('/api/rentals.json');
        // the Browser's fetch API requests the JSON data from our server's API at "public/api/rentals.json"
        let {data} = await response.json();
        // parsing JSON data 

        return data.map(model => {
            let { attributes, id } = model;
            // extracting the nested attributes object
            let type;

            if(COMMUNITY_CATEGORIES.includes(attributes.category)){
                type = "Community";
            }else{
                type="Standalone";
            }

            return { id, type, ...attributes };
            // added back the missing type attribute
        })
    }
}