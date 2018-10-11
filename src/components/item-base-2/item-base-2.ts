import { Component } from '@angular/core';

/**
 * Generated class for the ItemBase_2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-base-2',
  templateUrl: 'item-base-2.html'
})
export class ItemBase_2Component {

  text: string;

  constructor() {
    console.log('Hello ItemBase_2Component Component');
    this.text = 'Hello World';
  }

}
