import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environment';

/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostServiceProvider {

  LIST_POST_MARK_STR = "list-post-mark";
  LIST_POST_HISTORY_STR = "list-post-history";

  // category
  LIST_CATEGORY_SAVE = "list_category";

  // type view
  TYPE_VIEW_DETAIL_POST = "TYPE_VIEW_DETAIL_POST";
  TYPE_VIEW_DAYTIME = "TYPE_VIEW_DAYTIME";
  TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";

  getCategoryUrl;
  getPostUrl;
  getMediaUrl;
  getDetailPostUrl;
  getMenuPageUrl;

  constructor(private http: HttpClient, private env: Environment) {
    this.getCategoryUrl = this.env.serverUrl + '/wp-json/wp/v2/categories?per_page=15';
    this.getPostUrl = this.env.serverUrl + '/wp-json/wp/v2/posts';
    this.getMediaUrl = this.env.serverUrl + 'wp-json/wp/v2/media/';
    this.getDetailPostUrl = this.env.serverUrl + '/wp-json/wp/v2/posts/';
    this.getMenuPageUrl = this.env.serverUrl + '/wp-json/wp/v2/pages';
  }

  getCategory() {
    return this.http.get(this.getCategoryUrl);
  }

  getPost(categoryId, page) {
    console.log("get list post page :" + page)
    if (categoryId == "tn1") {
      let params = {
        _embed: null,
        page: page,
        per_page: '10'
      }
      return this.http.get(this.getPostUrl, { params: params });
    } else {
      let params = {
        _embed: null,
        categories: categoryId,
        page: page,
        per_page: '10'
      }
      return this.http.get(this.getPostUrl, { params: params });
    }
  }

  getLinkImgThumbnai(id, index, callback) {
    let re = this.http.get(this.getMediaUrl + id, {});
    re.subscribe((res1: any) => {

      let sizeObj = res1.media_details.sizes;
      let urlImg = sizeObj['medium2-thumb'];
      let link = urlImg.source_url;
      // for(let o in sizeObj){
      //   console.log("test:"+o);
      // }
      callback(index, link)
    });
  }

  getMenuPage() {
    return this.http.get(this.getMenuPageUrl);
  }

  getDetailPost(postId) {
    return this.http.get(this.getDetailPostUrl + postId);
  }

  searchKeyword(keySearch) {
    let params = {
      _embed: null,
      search: keySearch
    }
    return this.http.get(this.getPostUrl, { params: params });
  }

  /* Local Storage */
  addOrRemoveListPostMark(post, callback) {
    let listPostMark = localStorage.getItem(this.LIST_POST_MARK_STR);
    if (listPostMark) {
      let data = JSON.parse(listPostMark);
      let index = data.findIndex(x => x.id == post.id);
      console.log(post);
      console.log(index);
      if (index != -1) {
        data.splice(index, 1);
      } else {
        data.push({
          id: post.id, img: post.img, datetime_create: post.datetime_create, title: post.title,
          category: post.category
        });
      }
      localStorage.setItem(this.LIST_POST_MARK_STR, JSON.stringify(data));
      return callback(data);
    } else {
      let data = [{
        id: post.id, img: post.img, datetime_create: post.datetime_create, title: post.title,
        category: post.category
      }];
      localStorage.setItem(this.LIST_POST_MARK_STR, JSON.stringify(data));
      return callback(data);
    }
  }

  getListPostMark(callback) {
    let listPostMark = localStorage.getItem(this.LIST_POST_MARK_STR);
    if (listPostMark) {
      return callback(JSON.parse(listPostMark));
    } else {
      return callback(null);
    }
  }

  setDataHisttory(list) {
    localStorage.setItem(this.LIST_POST_HISTORY_STR, JSON.stringify(list));
  }

  getListHistoryPost(callback) {
    let list = localStorage.getItem(this.LIST_POST_HISTORY_STR);
    if (list) {
      return callback(JSON.parse(list));
    } else {
      return callback(null);
    }
  }


  setCategoryLocal(listCategory) {
    localStorage.setItem(this.LIST_CATEGORY_SAVE,JSON.stringify(listCategory));
  }

  getLisstCategoryLocal(){
    let list = localStorage.getItem(this.LIST_CATEGORY_SAVE);
    return (list) ? JSON.parse(list) : [];
  }

  getURLbase(){
    return this.env.serverUrl;
  }

  setTypeView(type=null){
    switch (type) {
      case this.TYPE_VIEW_NIGHT:
        localStorage.setItem(this.TYPE_VIEW_DETAIL_POST, this.TYPE_VIEW_NIGHT);
        break;
    
      default:
        localStorage.setItem(this.TYPE_VIEW_DETAIL_POST, this.TYPE_VIEW_DAYTIME);
        break;
    }
  }

  getTypeView(){
    return localStorage.getItem(this.TYPE_VIEW_DETAIL_POST);
  }
}
