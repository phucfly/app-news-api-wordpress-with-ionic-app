import { AppSingleton } from './../../providers/AppSingleton';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { DetailPostPage } from '../detail-post/detail-post';

/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabconfig',
  templateUrl: 'tabconfig.html',
})
export class TabConfigPage {

  list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostServiceProvider,public app:AppSingleton) {
      this.list=app.listItemsTab;
  }

  ionViewDidLoad() {
   
  }


  changeCheck(i){
    // let itemTemp=this.list[i];
    console.log("Change 1:"+JSON.stringify(this.list[i]));
    // console.log("Change 2 item:"+JSON.stringify(itemTemp));
    // itemTemp['isShow']=false;
    // let it =Object.assign(itemTemp,{"isShow":!itemTemp.isShow});
    
    // console.log("Change 2 item s:"+JSON.stringify(it));
    console.log("Change 2: list"+JSON.stringify(this.list));
  }

  clickSave(){
      this.app.listItemsTab=this.list;
      this.postService.setCategoryLocal(this.app.listItemsTab);
      this.app.callbackSave.reLoadUI();
      this.navCtrl.pop();
  }
}
