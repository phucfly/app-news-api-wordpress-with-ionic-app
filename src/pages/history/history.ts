import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { DetailPostPage } from '../detail-post/detail-post';

/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-history-list',
  templateUrl: 'history.html',
})
export class History {

  listMarked = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostServiceProvider) {

  }

  ionViewDidLoad() {
    this.postService.getListHistoryPost((res)=>{
      this.listMarked = res;
      console.log('res 1:'+JSON.stringify (res));
    });
  }

  getTimeFormat(date) {
    let d = new Date(date);
    console.log("date m:"+d.getTime);
    let dateFormat = d.getFullYear() + '-' +
      (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
      (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
    let timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
    let time = timeMinute < 60 ? timeMinute + ' phút trước' :
      timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
    return time;
  }

  openDetailPost(post) {
    console.log("post id:"+post.idCategories);
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
