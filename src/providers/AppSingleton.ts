import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AppSingleton {

  listItemsTab = [];

  data = "init data";
  callbackSave;
  
  constructor() {
    console.log('Hello Singleton Provider');
  }

  set(data) {
    this.data = data;
  }

  log() {
    console.log(this.data);
  }
}