import { Utils } from './../../util/Util';
import { AppSingleton } from '../../providers/AppSingleton';
import { Component, Host } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostServiceProvider } from '../../providers/post-service/post-service';


import { SocialSharing } from '@ionic-native/social-sharing';
import { stringify } from '@angular/core/src/util';

/**
 * Generated class for the DetailPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-post',
  templateUrl: 'detail-post.html',
})
export class DetailPostPage {
  id;
  title;
  content;
  time;
  author;
  category;
  idCategory;
  listPost = [];
  isMarked = false;
  linkWeb;
  des;

  fontSizeContent;

  TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";
  nightView = '';

  constructor(public navCtrl: NavController, private navParams: NavParams,
    private postService: PostServiceProvider,
    private shareObj: SocialSharing, public singleton: AppSingleton) {

    console.log("Singleton:" + singleton.data);
    console.log('constructor DetailPostPage');
    this.id = this.navParams.get("id");
    this.title = this.navParams.get("title");

    this.time = this.navParams.get("time");
    this.author = this.navParams.get("author");
    this.category = this.navParams.get("category");
    this.des = this.navParams.get("des");
    this.idCategory = this.navParams.get("idCategories");
    // console.log("id idCategories:"+this.idCategories);
    this.fontSizeContent = 10;

    // listPost:arrayPost,
    //
    this.postService.getListPostMark((res: any) => {
      if (res) {
        let index = res.findIndex(x => x.id == this.navParams.get('id'));
        if (index != -1) { this.isMarked = true; }
      }
    });

    this.linkWeb = this.navParams.get("link");

    this.nightView = this.postService.getTypeView();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPostPage');
    // this.listPost=this.navParams.get("listPost");
    console.log('id:' + this.id);

    console.log(this.nightView);

  }

  ionViewWillEnter() {
    this.postService.setTypeView();
    let type = this.postService.getTypeView();

    console.log('ionViewWillEnter DetailPostPage');

    console.log("id cate:" + this.idCategory);
    try {
      let find = this.singleton.listItemsTab.findIndex(e => e.id == this.idCategory);
      console.log("obj cate:" + JSON.stringify(this.singleton.listItemsTab[find]));
      if (find != 1) {
        this.category = this.singleton.listItemsTab[find].name;
      }
    } catch (error) {
      this.idCategory = "";
    }


    try {
      this.getPostMore();
      this.setInHistory();
    } catch (error) {

    }
    this.content = this.navParams.get("content");
  }

  getPostMore() {
    let list = this.navParams.get("listPost");
    if (!list)
      return;
    this.listPost = list.filter((post) => {
      // return post;
      if (post.id !== this.id) {
        return post;
      }
    });
  }

  markPost() {
    let post = {
      id: this.navParams.get('id'),
      img: this.navParams.get('img'),
      datetime_create: this.navParams.get('datetime_create'),
      title: this.navParams.get("title"),
      idCategory: this.idCategory,
      category: this.category
    };
    this.postService.addOrRemoveListPostMark(post, (res: any) => {
      console.log(res);
      this.isMarked = !this.isMarked;
    });
  }

  setInHistory() {
    let post = {
      id: this.navParams.get('id'),
      img: this.navParams.get('img'),
      datetime_create: this.navParams.get('datetime_create'),
      title: this.navParams.get("title"),
      category: this.category,
      idCategory: this.idCategory
    };
    let listHistory = [];
    this.postService.getListHistoryPost((e) => {
      if (e) {
        listHistory = e;
        console.log("list history:" + JSON.stringify(listHistory));
        let find = listHistory.findIndex(x => x.id === this.id);
        console.log("find: id:" + this.id + " f:" + find);
        if (find != -1) {
          listHistory.splice(find, 1);
          listHistory.unshift(post);
        } else {
          listHistory.unshift(post);
        }
        if (listHistory.length > 20) {
          listHistory.splice(listHistory.length - 1, 1);
        }
        this.postService.setDataHisttory(listHistory);
      } else {
        listHistory.unshift(post);
        this.postService.setDataHisttory(listHistory);
      }


    })
  }

  sharePost() {
    console.log(this.linkWeb);
    debugger;
    this.shareObj.share(this.title, this.content, null, this.linkWeb).then(() => {

    }).catch(() => {

    });
  }
  onDetailPost(post) {
    this.navCtrl.push(DetailPostPage, {
      id: post.id,
      title: post.title,
      content: post.detail,
      time: post.time,
      author: post.author,
      category: this.category,
      img: post.img,
      datetime_create: post.datetime_create,
      link: post.link,
      idCategories: post.idCategories,
      listPost: this.listPost,
    });
    // console.log(post);
  }

  changeViewNight(){
    if(this.nightView==this.TYPE_VIEW_NIGHT){
      let app = document.getElementById('root-app');
      app.className = app.className.replace('night','');
      this.postService.setTypeView();
    }else{
      let app = document.getElementById('root-app');
      app.className+="night";
      this.postService.setTypeView(this.TYPE_VIEW_NIGHT);
    }
    this.nightView = this.nightView==this.TYPE_VIEW_NIGHT?'none':this.TYPE_VIEW_NIGHT;
  }
}
