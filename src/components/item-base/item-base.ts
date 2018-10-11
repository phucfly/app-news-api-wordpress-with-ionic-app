import { Component,Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Utils } from '../../util/Util';
/**
 * Generated class for the ItemBaseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-base',
  templateUrl: 'item-base.html'
})
export class ItemBaseComponent {

  @Input() post;
  constructor(public plt: Platform) {
    console.log('Data:'+JSON.stringify(this.post));
    
  }

  getTimeFormat(date) {
    let time= (this.plt.is('ios')) ? Utils.getTimeFormatIOS(date) : Utils.getTimeFormat(date);
    return time;
  }


}