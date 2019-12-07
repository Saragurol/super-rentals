// Glimmmer Component, is one of several component classes available. All types of components have different import paths. Impt to know for when looking up documentation, as they have different and incompatible APIs
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class RentalImageComponent extends Component {
  // constructor(...args) {
  //   super(...args);
  //   this.isLarge = false;
  // }
  // initilized the instance variable this.isLarge with value false, since this is the desired default state

  @tracked isLarge = false;
  // can instead use short syntax to initialize instance variables
  // "@tracked" decorator tells Ember to monitor this variable for updates
  // whenever the value changes, Ember will automatically re-render any templates that depend on its value
  // In this case, whenever we assign a new value to this.isLarge, the @tracked annotation will cause Ember to re-evaluate the {{#if this.isLarge}} conditional in our template, and will switch between the two blocks accordingly.

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
// ember will create an instance of the class whenever this component is invoked
