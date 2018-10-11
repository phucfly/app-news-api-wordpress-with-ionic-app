import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Slides, Content, Platform, ToastController, AlertController } from 'ionic-angular';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { SearchPage } from '../search/search';
import { AppSingleton } from '../../providers/AppSingleton';
import { listTabData } from './data';
import { Environment } from '../../providers/environment';
import { Utils } from '../../util/Util';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('MultiItemsScrollingTabs') ItemsTitles: Content;
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  @ViewChild('itemtabs') tabsDOM: ElementRef;

  SwipedTabsIndicator = null;
  itemTabDOM = null;
  tabTitleWidthArray = [];
  tabElementWidth_px = 50;
  screenWidth_px = 0;
  isRight = true;
  isLeft = true;
  tabs = [];
  tabsAll = [];
  tabSelect = 0;
  tabWidth = '100%';

  isInitPostView = true;
  widthTabItem = 0;
  colorSelect;
  colorTabs = ['#bf2254', '#f7364c', '#2b43bc', '#6f38a0', '#3878b7', '#19a899', '#07911b', '#6d8c47', '#bf2254', '#f7364c', '#2b43bc', '#6f38a0', '#3878b7', '#19a899', '#07911b', '#6d8c47'];
  typeFilterPost = 0;

  constructor(public navCtrl: NavController, private platform: Platform,
    private postService: PostServiceProvider, public singleton: AppSingleton,
    private toastCtrl: ToastController, private env: Environment, private alertCtrl: AlertController) {
    this.doCallbackSave();
    if (postService.getLisstCategoryLocal().length <= 0 && this.env.serverUrl == "https://tin61.com/") {
      console.log("init list tab:");

      singleton.listItemsTab = listTabData;

      postService.setCategoryLocal(singleton.listItemsTab);

    }
    singleton.listItemsTab = postService.getLisstCategoryLocal();
    console.log("Constructor");
    this.onLoadData();

    this.postService.getListPostMark((res: any) => {
      console.log(" -- list post marked --")
      console.log(res);
    });
  }

  onLoadData() {
    this.getCategory(e => {
      console.log('callback get cate:' + this.tabs.length);
      console.log('callback get cate 1:' + JSON.stringify(this.tabs));
      this.screenWidth_px = this.platform.width();
      this.widthTabItem = this.tabs.length > 4 ? this.screenWidth_px / 5 : this.screenWidth_px / this.tabs.length;
      this.SwipedTabsIndicator = document.getElementById("indicator");
      this.itemTabDOM = document.getElementById("itemtabs");

      setTimeout(() => {
        for (let i in this.tabs) {
          this.tabTitleWidthArray.push(document.getElementById("tabTitle" + i).offsetWidth);
        }
        console.log('get tab se:' + JSON.stringify(this.tabs));
        console.log("get tab 1:" + JSON.stringify(this.tabs));
        this.selectTab(0);
      }, 300);
    });
  }

  selectTab(index) {
    console.log("select tab:" + JSON.stringify(this.tabs));

    this.SwipedTabsSlider.slideTo(index);
    this.tabSelect = index;
    this.colorSelect = this.tabs[index].backgroundColor;
    let widthDom = window.getComputedStyle(this.tabsDOM.nativeElement).getPropertyValue('width');
    this.tabWidth = parseInt(widthDom) > this.screenWidth_px ? widthDom : '100%';
    this.activeTab();
  }

  activeTab() {
    if (this.tabSelect == 0) {
      this.tabs[0].active = 1;
      this.tabs[1].active = 1;
      this.tabs[2].active = 1;
    } else if (this.tabSelect == this.tabs.length - 1) {
      this.tabs[this.tabSelect].active = 1;
      this.tabs[this.tabSelect - 1].active = 1;
      this.tabs[this.tabSelect - 2].active = 1;
    } else {
      this.tabs[this.tabSelect].active = 1;
      this.tabs[this.tabSelect + 1].active = 1;
      this.tabs[this.tabSelect - 1].active = 1;
    }
  }

  updateIndicatorPosition() {
    var index = this.SwipedTabsSlider.getActiveIndex();
    if (this.SwipedTabsSlider.length() == index)
      index = index - 1;
    this.tabSelect = index;
    this.colorSelect = this.tabs[this.tabSelect].backgroundColor;
    this.activeTab();
  }

  calculateDistanceToSpnd(index) {
    var result = 0;
    for (var _i = 0; _i < index; _i++) {
      result = result + this.tabTitleWidthArray[_i];
    }
    return result;
  }

  scrollIndicatiorTab() {
    var index = this.SwipedTabsSlider.getActiveIndex();
    if (index < this.tabs.length) {
      this.tabSelect = index;
    }
    this.colorSelect = this.tabs[this.tabSelect].backgroundColor;
    this.activeTab();
    // setTimeout(function(){ 
    //   // this.ItemsTitles.scrollTo(this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex()) - this.screenWidth_px / 2, 0);
    //  }, 300);
    this.ItemsTitles.scrollTo(this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex()) - this.screenWidth_px / 2, 1000);
  }

  animateIndicator($event) {
    this.isLeft = false;
    this.isRight = false;
    var currentSliderCenterProgress = (1 / (this.SwipedTabsSlider.length() - 1)) * this.SwipedTabsSlider.getActiveIndex();
    if ($event.progress < currentSliderCenterProgress) {
      this.isLeft = true;
      this.isRight = false;

    } if ($event.progress > currentSliderCenterProgress) {
      this.isLeft = false;
      this.isRight = true;
    }

    if (this.SwipedTabsSlider.isEnd())
      this.isRight = false;

    if (this.SwipedTabsSlider.isBeginning())
      this.isLeft = false;

    var index = this.SwipedTabsSlider.getActiveIndex();
    if (index < this.tabs.length) {
      this.tabSelect = index;
    }
    this.activeTab();
    this.colorSelect = this.tabs[this.tabSelect].backgroundColor;
  }

  changeFilter() {
    this.isInitPostView = false;
    this.typeFilterPost = this.typeFilterPost == 0 ? 1 : 0;
  }


  // Post

  getCategory(callback) {
    this.tabs = [];
    if (this.env.serverUrl == "https://tin61.com/") {
      // this.tabs=this.singleton.listItemsTab;
    }
    console.log("getCategory");

    this.postService.getCategory().subscribe((res: any) => {
      if (res) {
        this.handleListCategoryRes(res, callback);
        // if (this.env.serverUrl != "https://tin61.com/") {
        //   this.handleListCategoryRes(res, callback);
        // } else {
        //   this.singleton.listItemsTab.forEach((e, i) => {
        //     if (e.isShow) {
        //       console.log("push tab:");
        //       this.tabs.push(e);
        //     }
        //   })
        //   if (this.tabs[0].id != "tn1") {
        //     this.tabs.unshift({
        //       id: "tn1", active: 0,
        //       name: "Tin Nóng", backgroundColor: "#07911b",
        //       loadSuccess: false,
        //       isShow: true,
        //       count: 50
        //     })
        //     this.singleton.listItemsTab=this.tabs;
        //     this.postService.setCategoryLocal(this.singleton.listItemsTab);
        //   }
        //   return callback(this.tabs.length);
        // }
        console.log("start callback: list;" + this.tabs.length);





      }
    }, e => {
      this.presentAlertNotConnect();
    });
  }

  checkListNew(listNew) {
    this.singleton.listItemsTab = this.singleton.listItemsTab.filter((item) => {
      let find = listNew.findIndex(e => e.id == item.id);
      if (find != -1) {
        return item;
      }
    })
  }

  // Get event post view
  postLoadingSuccess(value, index) {
    this.tabs[index].loadSuccess = value;
  }

  toSearch() {
    this.navCtrl.push(SearchPage, {});
  }
  doCallbackSave() {


    this.singleton.callbackSave = {
      reLoadUI: () => {
        console.log("callback save:");
        this.tabs = this.singleton.listItemsTab.filter((item) => {
          if (item.isShow)
            return item;
        });
        this.selectTab(0);

      }
    }
  }


  handleListCategoryRes(res, callback) {
    let i = 0;
    // this.checkListNew(res);
    res.forEach((element, index) => {
      let itemTab = {
        id: element.id,
        active: 0,
        name: element.name,
        backgroundColor: this.colorTabs[i],
        loadSuccess: false,
        count: element.count,
        isShow: true
      };
      let findCheck = this.singleton.listItemsTab.findIndex(x => x.id == itemTab.id);
      console.log('find check:kq:' + findCheck + " :" + itemTab.id + " name :" + itemTab.name
        + "count:" + itemTab.count);
      if (findCheck != -1) {
        if (itemTab.count != this.singleton.listItemsTab[findCheck].count) {
          console.log(("change: size 1:" + this.singleton.listItemsTab[findCheck].count
            + " size 2:" + itemTab.count));

          this.singleton.listItemsTab[findCheck].count = itemTab.count;
          this.postService.setCategoryLocal(this.singleton.listItemsTab);
        }
      }
      if (findCheck != -1 && this.singleton.listItemsTab[findCheck].isShow) {
        console.log('find check:kq:show:' + " name :" + itemTab.name);
        // this.tabs.push(itemTab);
      } if (findCheck == -1) {

        // this.tabs.push(itemTab);
        this.singleton.listItemsTab.push(itemTab);
        
      }

      // this.tabs.push(itemTab);

      if (i < this.colorTabs.length - 1) {
        i++;
      }
      else {
        i = 0;
      }
      console.log("size:" + this.tabs.length);
    });
    if (this.singleton.listItemsTab.length > 0 && this.singleton.listItemsTab[0].id != 'tn1') {
      this.singleton.listItemsTab.unshift({
        id: "tn1", active: 0,
        name: "Tin Mới", backgroundColor: this.colorTabs[8],
        loadSuccess: false,
        isShow: true,
        count: 1000
      });
    }
    this.tabs = this.singleton.listItemsTab.filter((item) => {
      if (item.isShow)
        return item;
    });
    this.postService.setCategoryLocal(this.singleton.listItemsTab);
    callback(this.tabs.length);
  }

  pushToast(e) {
    let toast = this.toastCtrl.create({
      message: e,
      duration: 10000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentAlertNotConnect() {
    let alert = this.alertCtrl.create({
      title: 'Lỗi kết nối mạng !',
      subTitle: 'Vui lòng thử lại.',
      buttons: [{
        text: 'Thử lại',
        role: 'cancel',
        handler: () => {
          this.onLoadData();
        }
      }]
    });
    alert.present();
  }
}
