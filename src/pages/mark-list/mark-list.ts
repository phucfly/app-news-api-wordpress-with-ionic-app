import { Utils } from './../../util/Util';
import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { DetailPostPage } from '../detail-post/detail-post';

/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mark-list',
  templateUrl: 'mark-list.html',
})
export class MarkListPage {

  listMarked = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostServiceProvider,public plt: Platform) {

  }

  ionViewDidLoad() {
    this.postService.getListPostMark((res)=>{
      this.listMarked = res;
      console.log(res);
    });
  }

  getTimeFormat(date) {
     if(this.plt.is('ios'))
        return Utils.getTimeFormatIOS(date);
      return Utils.getTimeFormat(date)
  }

  openDetailPost(post) {
    console.log("post id"+post.id);
    this.postService.getDetailPost(post.id).subscribe((res:any) => {
      console.log(res);
      this.navCtrl.push(DetailPostPage, {
        id: res.id,
        title: res.title.rendered,
        content: res.content.rendered,
        time: this.getTimeFormat(res.date),
        author: res.author,
        category: post.category,
        img: post.img,
        datetime_create: res.date,
        idCategories:post.idCategories,
      });
    });
  }

}
