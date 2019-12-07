import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';
// import the access token from the config file

export default class MapComponent extends Component {
    get token(){
        // token getter returns imported token. Access the token as this.token
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
        // URL -encode the token in case it contains any non-URL-safe special characters 
    }
}
