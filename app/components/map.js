import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';
// import the access token from the config file

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
    get src() {
        let { lng, lat, width, height, zoom } = this.args;
    
        let coordinates = `${lng},${lat},${zoom}`;
        let dimensions  = `${width}x${height}`;
        let accessToken = `access_token=${this.token}`;
    
        return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
      }
    //   All arguments that can be accessed from this.args API are implicitly marked as @tracked and provided by the Glimmer component superclass

    //   this JS file has access to the Map component's arguments using the this.args API 

    //   this.args API moves the URL logic from the template into a new getter

    //   getters cannot be assigned a new value directly
        
    get token(){
        // token getter returns imported token. Access the token as this.token
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
        // URL -encode the token in case it contains any non-URL-safe special characters 
    }
}
