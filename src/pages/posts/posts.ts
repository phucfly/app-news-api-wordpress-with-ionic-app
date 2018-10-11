import { Component, Input, Output, OnChanges, ViewChild, EventEmitter } from '@angular/core';
import { NavController, NavParams, Content ,Platform} from 'ionic-angular';
import { DetailPostPage } from '../detail-post/detail-post';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { Environment } from '../../providers/environment';
import { Utils } from '../../util/Util';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const SRC_IMG_DEFAULT = "https://danangz.vn/wp-content/uploads/2016/12/logo-danangz-da-moi.png";

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage implements OnChanges {
  myImgUrl: String = './assets/images/myimage.png';
  @ViewChild('list') content: Content;
  @Input() typeFilter: any;
  // @Input() listPost: any;
  @Input() active: any;
  @Input() isInit: any;
  @Input() idCategory: any;
  @Input() nameCategory: any;
  @Input() countPost: any;
  @Output() loadSuccess = new EventEmitter();

  listPost = [];
  dataPost = [];
  listPostMini = [];
  postMain;
  styleFilter = [];
  lastScroll;
  currentPage = 1;
  canLoadMore = true;

  isErrorDataFirst = false;

  myCountDownTime;

  constructor(public navCtrl: NavController, public navParams: NavParams,
               private postService: PostServiceProvider, private env: Environment,public plt: Platform) {
    this.styleFilter = ['type-1', 'default'];
    this.startLoađata(null);
  }

  ionViewDidEnter() {
   
  }

  ngOnChanges() {
    // if (this.isInit) {

      this.startLoađata(null);
      

    let scroll = this.content.getScrollElement();
    this.lastScroll = 0;
    scroll.addEventListener('scroll', () => {
      // console.log("count:"+this.countPost);
      if (this.countPost > this.listPost.length || this.idCategory == "") {
        this.showSroll(scroll);
      }
    })
  }

  checkLoadDataFirst() {
    this.myCountDownTime = setInterval(() => {
      clearInterval(this.myCountDownTime);
      if (this.isErrorDataFirst || this.listPost.length == 0) {
        this.startLoađata(null);
      }
    }, 15000)
  }

  startLoađata(callback) {
    this.isErrorDataFirst = false;
    this.initListPost(res => {
      if (this.myCountDownTime) {
        clearInterval(this.myCountDownTime);
      }
      this.isErrorDataFirst = false;
      this.dataPost = [];
      if (this.typeFilter == 0) { // 0
        this.postMain = this.listPost[0];
      }

      if(callback){
        callback();       
      }
      // Emit loading success
      this.loadSuccess.emit(true);
    }, (e) => {
      if (e) {
        console.log("error:" + e);
        this.isErrorDataFirst = true;
      }
    });
  }

  showSroll(scroll: HTMLElement) {
    console.log("size:" + this.listPost.length);
    console.log('call loadmore 1');
    let scrollTop = scroll.scrollTop;
    if (this.canLoadMore && scrollTop > this.lastScroll && scroll.scrollTop + window.innerHeight - 100 >= scroll.scrollHeight) {
      console.log('call loadmore');
      this.canLoadMore = false;
      this.currentPage++;
      this.postService.getPost(this.idCategory, this.currentPage).subscribe((res: any) => {
        let count = 0;
        res.forEach(element => {
          console.log("log test:page " + this.currentPage + " ; " + element.title.rendered);

          let html = document.createElement("div");
          html.innerHTML = element.content.rendered;
          // let img = html.getElementsByTagName('img')[0];

          // let tileNew = this.toStringHandle(element.title.rendered);
          // let imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;
          let newObj = this.getObjItem(element);
          this.listPost.push(newObj);
          console.log("log test:page obj" + this.currentPage + " : " + newObj.title);
          count++;

          if (count == res.length) {
            this.canLoadMore = true;
          }
        });


      });
    }
    this.lastScroll = screenTop;
  }

  initListPost(callback, erroCallback) {
    if (this.active) {
      
      this.postService.getPost(this.idCategory, 1).subscribe((res: any) => {
        console.log(res);
        this.listPost = [];
        if (res) {
          res.forEach(element => {
            let html = document.createElement("div");
            html.innerHTML = element.content.rendered;

            let newObj = this.getObjItem(element);
            this.listPost.push(newObj);
            if(this.listPostMini && this.listPostMini.length<11)
                this.listPostMini.push(newObj);


            if (this.listPost.length == res.length) {
              // this.listPost=this.sortByFrom(this.listPost);
              
              return callback(true);
            }
          });

        }
      }, e => {
        erroCallback(e);
      });
    }
  }

  toStringHandle(st) {
    var str = st;
    // console.log("to string:"+JSON.stringify(st));
    while (str.indexOf("&#") != -1) {
      let find = str.indexOf("&#");
      let temp = str.substring(find, find + 7);
      str = str.replace(temp, '');
    }
    return str;
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad PostsPage');
  }

  getIndexFilterPost(num, per, index) {
    return (num % per == index);
  }

  openDetailPost(post) {
    console.log('click DetailPostPage');
    if (this.listPostMini.length <= 0) {
      // this.listPostMini = this.listPost;
    }
    console.log("click id categori: "+post.idCategories);
    
    this.navCtrl.push(DetailPostPage, {
      id: post.id,
      title: post.title,
      content: post.detail,
      des: post.des,
      time: post.time,
      author: post.author,
      category: this.nameCategory,
      idCategories:post.idCategories,
      img: post.img,
      datetime_create: post.datetime_create,
      link: post.link,
      listPost: this.listPostMini,
    });
    // console.log(post);
  }


  getObjItem(e) {
    if (this.env.serverUrl == "https://tin61.com/") {
      return Utils.getObjItemTin68(e,(this.plt.is('ios')));
    }
    return Utils.getObjItemDannangZ(e, (this.plt.is('ios')));
  }

  getObjItemDannangZ(element) {
    let html = document.createElement("div");
    html.innerHTML = element.content.rendered;
    // let img = html.getElementsByTagName('img')[0];

    let tileNew = this.toStringHandle(element.title.rendered);
    // let contentNew=this.toStringHandle(element.content.rendered);
    let imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;

    // let imgI='http://tin60.com/wp-content/uploads/2018/09/9ab7157cfa38d8260c8d98702b14e9e3-300x157.jpg';
    let obj = {
      id: element.id,
      title: tileNew,
      img: (imgI) ? imgI : SRC_IMG_DEFAULT,
      category: this.nameCategory,
      des: element.excerpt.rendered,
      detail: element.content.rendered,
      time: this.getTimeFormat(element.date),
      author: element._embedded.author[0].name,
      link: element.link,
      datetime_create: element.date
    }

    return obj;
  }


  getSrcImgByContent(conten) {
    return "https://danangz.vn/wp-content/uploads/2018/09/papa.jpg";
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getTimeFormat(date) {
    // let stTime = "";
    let d = new Date(date);
    let dateFormat = d.getFullYear() + '-' +
      (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
      (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
    let timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
    let time = timeMinute < 60 ? timeMinute + ' phút trước' :
      timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
    return time;
  }

  doRefresh(refresher) {
      this.startLoađata(()=>{
          refresher.complete();
      })
  }

  sortByFrom(arr) {
    let sortBy = (function () {
      let toString = Object.prototype.toString,
        // default parser function
        parse = function (x) { return x; },
        // gets the item to be sorted
        getItem = function (x) {
          var isObject = x != null && typeof x === "object";
          var isProp = isObject && this.prop in x;
          return this.parser(isProp ? x[this.prop] : x);
        };

      /**
       * Sorts an array of elements.
       *
       * @param {Array} array: the collection to sort
       * @param {Object} cfg: the configuration options
       * @property {String}   cfg.prop: property name (if it is an Array of objects)
       * @property {Boolean}  cfg.desc: determines whether the sort is descending
       * @property {Function} cfg.parser: function to parse the items to expected type
       * @return {Array}
       */
      return function sortby(array, cfg) {
        if (!(array instanceof Array && array.length)) return [];
        if (toString.call(cfg) !== "[object Object]") cfg = {};
        if (typeof cfg.parser !== "function") cfg.parser = parse;
        cfg.desc = !!cfg.desc ? -1 : 1;
        return array.sort(function (a, b) {
          a = getItem.call(cfg, a);
          b = getItem.call(cfg, b);
          return cfg.desc * (a < b ? -1 : +(a > b));
        });
      };

    }());

    return sortBy(arr, {
      prop: "datetime_create",
      desc: true,
      parser: function (item) { return new Date(item); }
    });
  }
}
