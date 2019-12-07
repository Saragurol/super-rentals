// Glimmmer Component, is one of several component classes available. All types of components have different import paths. Impt to know for when looking up documentation, as they have different and incompatible APIs
import Component from '@glimmer/component';

export default class RentalImageComponent extends Component {
    constructor(...args){
        super(...args);
        this.isLarge = false;
        // initilized the instance variable this.isLarge with value false, since this is the desired default state 
    }
}
// ember will create an instance of the class whenever this component is invoked