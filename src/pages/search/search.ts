import { Utils } from './../../util/Util';
import { Component } from '@angular/core';
import {  NavController, NavParams, Platform } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { DetailPostPage } from '../detail-post/detail-post';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const SRC_IMG_DEFAULT = "http://tin61.com/wp-content/uploads/2018/09/thumb-default-1-210x136.jpg";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  doLoading;

  listPostSearch=[];

  listPostMore=[];

  myInputSearch="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private postService: PostServiceProvider,public plt: Platform) {
    this.doLoading=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput($event){
    console.log(this.myInputSearch);
    if(this.myInputSearch!=""){
      this.startSearch();
    }
  }

  onCancel(){
    this.listPostSearch=[];
    
  }

  openDetailPost(post) {
    console.log("post id"+post.id);
    if(this.listPostMore.length<=0){
      this.listPostMore=this.listPostSearch;
    }
     this.navCtrl.push(DetailPostPage, {
      id: post.id,
      title: post.title,
      content: post.detail,
      des:post.des,
      time: post.time,
      author: post.author,
      idCategories:post.idCategories,
      category: "",
      img: post.img,
      datetime_create: post.datetime_create,
      link: post.link,
      listPost: this.listPostMore,
    });
  }

  startSearch(){
    this.doLoading=true;
    this.listPostSearch=[];
    this.postService.searchKeyword(this.myInputSearch).subscribe((res: any) => {
        res.forEach(element => {
        this.doLoading=false;
        let html = document.createElement("div");
        html.innerHTML = element.content.rendered;

        let newObj = this.getObjItem(element);
        this.listPostSearch.push(newObj);

      });
    });
  }

  getObjItem(e){
    return Utils.getObjItemBaseApp(this.postService.getURLbase(),e,(this.plt.is('ios')));
  }
}
