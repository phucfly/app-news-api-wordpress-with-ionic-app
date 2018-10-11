webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_AppSingleton__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabConfigPage = /** @class */ (function () {
    function TabConfigPage(navCtrl, navParams, postService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.app = app;
        this.list = [];
        this.list = app.listItemsTab;
    }
    TabConfigPage.prototype.ionViewDidLoad = function () {
    };
    TabConfigPage.prototype.changeCheck = function (i) {
        // let itemTemp=this.list[i];
        console.log("Change 1:" + JSON.stringify(this.list[i]));
        // console.log("Change 2 item:"+JSON.stringify(itemTemp));
        // itemTemp['isShow']=false;
        // let it =Object.assign(itemTemp,{"isShow":!itemTemp.isShow});
        // console.log("Change 2 item s:"+JSON.stringify(it));
        console.log("Change 2: list" + JSON.stringify(this.list));
    };
    TabConfigPage.prototype.clickSave = function () {
        this.app.listItemsTab = this.list;
        this.postService.setCategoryLocal(this.app.listItemsTab);
        this.app.callbackSave.reLoadUI();
        this.navCtrl.pop();
    };
    TabConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tabconfig',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/tabconfig/tabconfig.html"*/'<!--\n  Generated template for the MarkListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Chọn Chuyên Mục</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-list>\n    <ion-item *ngFor="let item of list,let i=index" >\n      <ion-label>{{ item.name }}</ion-label>\n      <ion-checkbox [(ngModel)]=\'item.isShow\' (ionChange)="changeCheck(i)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button (click)="clickSave()" ion-button>Lưu thay đổi</button>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/tabconfig/tabconfig.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_AppSingleton__["a" /* AppSingleton */]])
    ], TabConfigPage);
    return TabConfigPage;
}());

//# sourceMappingURL=tabconfig.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_AppSingleton__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_environment__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, postService, singleton, toastCtrl, env, alertCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.postService = postService;
        this.singleton = singleton;
        this.toastCtrl = toastCtrl;
        this.env = env;
        this.alertCtrl = alertCtrl;
        this.SwipedTabsIndicator = null;
        this.itemTabDOM = null;
        this.tabTitleWidthArray = [];
        this.tabElementWidth_px = 50;
        this.screenWidth_px = 0;
        this.isRight = true;
        this.isLeft = true;
        this.tabs = [];
        this.tabsAll = [];
        this.tabSelect = 0;
        this.tabWidth = '100%';
        this.isInitPostView = true;
        this.widthTabItem = 0;
        this.colorTabs = ['#bf2254', '#f7364c', '#2b43bc', '#6f38a0', '#3878b7', '#19a899', '#07911b', '#6d8c47', '#bf2254', '#f7364c', '#2b43bc', '#6f38a0', '#3878b7', '#19a899', '#07911b', '#6d8c47'];
        this.typeFilterPost = 0;
        this.doCallbackSave();
        if (postService.getLisstCategoryLocal().length <= 0 && this.env.serverUrl == "https://tin61.com/") {
            console.log("init list tab:");
            singleton.listItemsTab = __WEBPACK_IMPORTED_MODULE_5__data__["a" /* listTabData */];
            postService.setCategoryLocal(singleton.listItemsTab);
        }
        singleton.listItemsTab = postService.getLisstCategoryLocal();
        console.log("Constructor");
        this.onLoadData();
        this.postService.getListPostMark(function (res) {
            console.log(" -- list post marked --");
            console.log(res);
        });
    }
    HomePage.prototype.onLoadData = function () {
        var _this = this;
        this.getCategory(function (e) {
            console.log('callback get cate:' + _this.tabs.length);
            console.log('callback get cate 1:' + JSON.stringify(_this.tabs));
            _this.screenWidth_px = _this.platform.width();
            _this.widthTabItem = _this.tabs.length > 4 ? _this.screenWidth_px / 5 : _this.screenWidth_px / _this.tabs.length;
            _this.SwipedTabsIndicator = document.getElementById("indicator");
            _this.itemTabDOM = document.getElementById("itemtabs");
            setTimeout(function () {
                for (var i in _this.tabs) {
                    _this.tabTitleWidthArray.push(document.getElementById("tabTitle" + i).offsetWidth);
                }
                console.log('get tab se:' + JSON.stringify(_this.tabs));
                console.log("get tab 1:" + JSON.stringify(_this.tabs));
                _this.selectTab(0);
            }, 300);
        });
    };
    HomePage.prototype.selectTab = function (index) {
        console.log("select tab:" + JSON.stringify(this.tabs));
        this.SwipedTabsSlider.slideTo(index);
        this.tabSelect = index;
        this.colorSelect = this.tabs[index].backgroundColor;
        var widthDom = window.getComputedStyle(this.tabsDOM.nativeElement).getPropertyValue('width');
        this.tabWidth = parseInt(widthDom) > this.screenWidth_px ? widthDom : '100%';
        this.activeTab();
    };
    HomePage.prototype.activeTab = function () {
        if (this.tabSelect == 0) {
            this.tabs[0].active = 1;
            this.tabs[1].active = 1;
            this.tabs[2].active = 1;
        }
        else if (this.tabSelect == this.tabs.length - 1) {
            this.tabs[this.tabSelect].active = 1;
            this.tabs[this.tabSelect - 1].active = 1;
            this.tabs[this.tabSelect - 2].active = 1;
        }
        else {
            this.tabs[this.tabSelect].active = 1;
            this.tabs[this.tabSelect + 1].active = 1;
            this.tabs[this.tabSelect - 1].active = 1;
        }
    };
    HomePage.prototype.updateIndicatorPosition = function () {
        var index = this.SwipedTabsSlider.getActiveIndex();
        if (this.SwipedTabsSlider.length() == index)
            index = index - 1;
        this.tabSelect = index;
        this.colorSelect = this.tabs[this.tabSelect].backgroundColor;
        this.activeTab();
    };
    HomePage.prototype.calculateDistanceToSpnd = function (index) {
        var result = 0;
        for (var _i = 0; _i < index; _i++) {
            result = result + this.tabTitleWidthArray[_i];
        }
        return result;
    };
    HomePage.prototype.scrollIndicatiorTab = function () {
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
    };
    HomePage.prototype.animateIndicator = function ($event) {
        this.isLeft = false;
        this.isRight = false;
        var currentSliderCenterProgress = (1 / (this.SwipedTabsSlider.length() - 1)) * this.SwipedTabsSlider.getActiveIndex();
        if ($event.progress < currentSliderCenterProgress) {
            this.isLeft = true;
            this.isRight = false;
        }
        if ($event.progress > currentSliderCenterProgress) {
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
    };
    HomePage.prototype.changeFilter = function () {
        this.isInitPostView = false;
        this.typeFilterPost = this.typeFilterPost == 0 ? 1 : 0;
    };
    // Post
    HomePage.prototype.getCategory = function (callback) {
        var _this = this;
        this.tabs = [];
        if (this.env.serverUrl == "https://tin61.com/") {
            // this.tabs=this.singleton.listItemsTab;
        }
        console.log("getCategory");
        this.postService.getCategory().subscribe(function (res) {
            if (res) {
                _this.handleListCategoryRes(res, callback);
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
                console.log("start callback: list;" + _this.tabs.length);
            }
        }, function (e) {
            _this.presentAlertNotConnect();
        });
    };
    HomePage.prototype.checkListNew = function (listNew) {
        this.singleton.listItemsTab = this.singleton.listItemsTab.filter(function (item) {
            var find = listNew.findIndex(function (e) { return e.id == item.id; });
            if (find != -1) {
                return item;
            }
        });
    };
    // Get event post view
    HomePage.prototype.postLoadingSuccess = function (value, index) {
        this.tabs[index].loadSuccess = value;
    };
    HomePage.prototype.toSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], {});
    };
    HomePage.prototype.doCallbackSave = function () {
        var _this = this;
        this.singleton.callbackSave = {
            reLoadUI: function () {
                console.log("callback save:");
                _this.tabs = _this.singleton.listItemsTab.filter(function (item) {
                    if (item.isShow)
                        return item;
                });
                _this.selectTab(0);
            }
        };
    };
    HomePage.prototype.handleListCategoryRes = function (res, callback) {
        var _this = this;
        var i = 0;
        // this.checkListNew(res);
        res.forEach(function (element, index) {
            var itemTab = {
                id: element.id,
                active: 0,
                name: element.name,
                backgroundColor: _this.colorTabs[i],
                loadSuccess: false,
                count: element.count,
                isShow: true
            };
            var findCheck = _this.singleton.listItemsTab.findIndex(function (x) { return x.id == itemTab.id; });
            console.log('find check:kq:' + findCheck + " :" + itemTab.id + " name :" + itemTab.name
                + "count:" + itemTab.count);
            if (findCheck != -1) {
                if (itemTab.count != _this.singleton.listItemsTab[findCheck].count) {
                    console.log(("change: size 1:" + _this.singleton.listItemsTab[findCheck].count
                        + " size 2:" + itemTab.count));
                    _this.singleton.listItemsTab[findCheck].count = itemTab.count;
                    _this.postService.setCategoryLocal(_this.singleton.listItemsTab);
                }
            }
            if (findCheck != -1 && _this.singleton.listItemsTab[findCheck].isShow) {
                console.log('find check:kq:show:' + " name :" + itemTab.name);
                // this.tabs.push(itemTab);
            }
            if (findCheck == -1) {
                // this.tabs.push(itemTab);
                _this.singleton.listItemsTab.push(itemTab);
            }
            // this.tabs.push(itemTab);
            if (i < _this.colorTabs.length - 1) {
                i++;
            }
            else {
                i = 0;
            }
            console.log("size:" + _this.tabs.length);
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
        this.tabs = this.singleton.listItemsTab.filter(function (item) {
            if (item.isShow)
                return item;
        });
        this.postService.setCategoryLocal(this.singleton.listItemsTab);
        callback(this.tabs.length);
    };
    HomePage.prototype.pushToast = function (e) {
        var toast = this.toastCtrl.create({
            message: e,
            duration: 10000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.presentAlertNotConnect = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Lỗi kết nối mạng !',
            subTitle: 'Vui lòng thử lại.',
            buttons: [{
                    text: 'Thử lại',
                    role: 'cancel',
                    handler: function () {
                        _this.onLoadData();
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('MultiItemsScrollingTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "ItemsTitles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('itemtabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "tabsDOM", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TIN HOT</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="toSearch()">\n        <ion-icon name="search" ></ion-icon>\n      </button>\n      <button ion-button (click)="changeFilter()">\n        <ion-icon name="grid" ></ion-icon>\n        <!-- <ion-icon name="keypad"></ion-icon> -->\n      </button>\n      \n      <!-- <button ion-button>\n        <ion-icon name="book"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-content #MultiItemsScrollingTabs  class="tabsContent">\n        <ion-segment  class="SwipedTabs-tabs" id="itemtabs" #itemtabs >\n          <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' id="tabTitle{{i}}" value="IngoreMe" (click)="selectTab(i)"\n          [ngStyle]="{\'width\': widthTabItem+\'px!important\'}"\n          [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'   >\n          {{tab.name}}\n            <div [ngStyle]="{\'background\': tab.backgroundColor}" class="bg-btn"></div>\n          </ion-segment-button>\n        </ion-segment>\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'background\': colorSelect, \'width\': tabWidth}"></div>\n    </ion-content>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-content padding>\n        <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)"\n        (ionSlideDidChange)="updateIndicatorPosition()"\n        (ionSlideWillChange)="scrollIndicatiorTab()" [pager]="false" >\n                <ion-slide *ngFor="let slide of tabs; let i=index">\n                  <div class="loading-home" *ngIf="!slide.loadSuccess">\n                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>\n                  </div>\n                  <page-posts [typeFilter]=\'typeFilterPost\' [isInit]="isInitPostView"\n                  [idCategory]="slide.id" [nameCategory]="slide.name" [active]="slide.active"\n                  (loadSuccess)="postLoadingSuccess($event, i)" [countPost]=\'slide.count\'></page-posts>\n                </ion-slide>\n        </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_AppSingleton__["a" /* AppSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_environment__["a" /* Environment */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Util__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_post_detail_post__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SRC_IMG_DEFAULT = "http://tin61.com/wp-content/uploads/2018/09/thumb-default-1-210x136.jpg";
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, postService, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.plt = plt;
        this.listPostSearch = [];
        this.listPostMore = [];
        this.myInputSearch = "";
        this.doLoading = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onInput = function ($event) {
        console.log(this.myInputSearch);
        if (this.myInputSearch != "") {
            this.startSearch();
        }
    };
    SearchPage.prototype.onCancel = function () {
        this.listPostSearch = [];
    };
    SearchPage.prototype.openDetailPost = function (post) {
        console.log("post id" + post.id);
        if (this.listPostMore.length <= 0) {
            this.listPostMore = this.listPostSearch;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_post_detail_post__["a" /* DetailPostPage */], {
            id: post.id,
            title: post.title,
            content: post.detail,
            des: post.des,
            time: post.time,
            author: post.author,
            idCategories: post.idCategories,
            category: "",
            img: post.img,
            datetime_create: post.datetime_create,
            link: post.link,
            listPost: this.listPostMore,
        });
    };
    SearchPage.prototype.startSearch = function () {
        var _this = this;
        this.doLoading = true;
        this.listPostSearch = [];
        this.postService.searchKeyword(this.myInputSearch).subscribe(function (res) {
            res.forEach(function (element) {
                _this.doLoading = false;
                var html = document.createElement("div");
                html.innerHTML = element.content.rendered;
                var newObj = _this.getObjItem(element);
                _this.listPostSearch.push(newObj);
            });
        });
    };
    SearchPage.prototype.getObjItem = function (e) {
        return __WEBPACK_IMPORTED_MODULE_0__util_Util__["a" /* Utils */].getObjItemBaseApp(this.postService.getURLbase(), e, (this.plt.is('ios')));
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar [(ngModel)]="myInputSearch" (search)="onInput($event)" class="search" [showCancelButton]="shouldShowCancel" (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-list *ngIf="!doLoading">\n        <div *ngFor="let item of listPostSearch" (click)="openDetailPost(item)">\n          <item-base [post]="item" ></item-base>\n        </div>\n    </ion-list>\n  <div class="loading-home" *ngIf="doLoading">\n    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Util__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_post_detail_post__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarkListPage = /** @class */ (function () {
    function MarkListPage(navCtrl, navParams, postService, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.plt = plt;
        this.listMarked = [];
    }
    MarkListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.postService.getListPostMark(function (res) {
            _this.listMarked = res;
            console.log(res);
        });
    };
    MarkListPage.prototype.getTimeFormat = function (date) {
        if (this.plt.is('ios'))
            return __WEBPACK_IMPORTED_MODULE_0__util_Util__["a" /* Utils */].getTimeFormatIOS(date);
        return __WEBPACK_IMPORTED_MODULE_0__util_Util__["a" /* Utils */].getTimeFormat(date);
    };
    MarkListPage.prototype.openDetailPost = function (post) {
        var _this = this;
        console.log("post id" + post.id);
        this.postService.getDetailPost(post.id).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_post_detail_post__["a" /* DetailPostPage */], {
                id: res.id,
                title: res.title.rendered,
                content: res.content.rendered,
                time: _this.getTimeFormat(res.date),
                author: res.author,
                category: post.category,
                img: post.img,
                datetime_create: res.date,
                idCategories: post.idCategories,
            });
        });
    };
    MarkListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mark-list',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/mark-list/mark-list.html"*/'<!--\n  Generated template for the MarkListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>CÁC BÀI VIẾT ĐÃ ĐÁNH DẤU</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <div *ngFor="let item of listMarked" class="mark-item" (click)="openDetailPost(item)">\n      <item-base [post]="item"></item-base>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/mark-list/mark-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
    ], MarkListPage);
    return MarkListPage;
}());

//# sourceMappingURL=mark-list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_post_detail_post__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var History = /** @class */ (function () {
    function History(navCtrl, navParams, postService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.listMarked = [];
    }
    History.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.postService.getListHistoryPost(function (res) {
            _this.listMarked = res;
            console.log('res 1:' + JSON.stringify(res));
        });
    };
    History.prototype.getTimeFormat = function (date) {
        var d = new Date(date);
        console.log("date m:" + d.getTime);
        var dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        var timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
        var time = timeMinute < 60 ? timeMinute + ' phút trước' :
            timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
        return time;
    };
    History.prototype.openDetailPost = function (post) {
        var _this = this;
        console.log("post id:" + post.idCategories);
        this.postService.getDetailPost(post.id).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_post_detail_post__["a" /* DetailPostPage */], {
                id: res.id,
                title: res.title.rendered,
                content: res.content.rendered,
                time: _this.getTimeFormat(res.date),
                author: res.author,
                category: post.category,
                img: post.img,
                datetime_create: res.date,
                idCategories: post.idCategories,
            });
        });
    };
    History = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history-list',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/history/history.html"*/'<!--\n  Generated template for the MarkListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Đọc gần đây</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-list>\n    <div *ngFor="let item of listMarked" class="mark-item" (click)="openDetailPost(item)">\n      <item-base [post]="item"></item-base>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__["a" /* PostServiceProvider */]])
    ], History);
    return History;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostServiceProvider = /** @class */ (function () {
    function PostServiceProvider(http, env) {
        this.http = http;
        this.env = env;
        this.LIST_POST_MARK_STR = "list-post-mark";
        this.LIST_POST_HISTORY_STR = "list-post-history";
        // category
        this.LIST_CATEGORY_SAVE = "list_category";
        // type view
        this.TYPE_VIEW_DETAIL_POST = "TYPE_VIEW_DETAIL_POST";
        this.TYPE_VIEW_DAYTIME = "TYPE_VIEW_DAYTIME";
        this.TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";
        this.getCategoryUrl = this.env.serverUrl + '/wp-json/wp/v2/categories?per_page=15';
        this.getPostUrl = this.env.serverUrl + '/wp-json/wp/v2/posts';
        this.getMediaUrl = this.env.serverUrl + 'wp-json/wp/v2/media/';
        this.getDetailPostUrl = this.env.serverUrl + '/wp-json/wp/v2/posts/';
        this.getMenuPageUrl = this.env.serverUrl + '/wp-json/wp/v2/pages';
    }
    PostServiceProvider.prototype.getCategory = function () {
        return this.http.get(this.getCategoryUrl);
    };
    PostServiceProvider.prototype.getPost = function (categoryId, page) {
        console.log("get list post page :" + page);
        if (categoryId == "tn1") {
            var params = {
                _embed: null,
                page: page,
                per_page: '10'
            };
            return this.http.get(this.getPostUrl, { params: params });
        }
        else {
            var params = {
                _embed: null,
                categories: categoryId,
                page: page,
                per_page: '10'
            };
            return this.http.get(this.getPostUrl, { params: params });
        }
    };
    PostServiceProvider.prototype.getLinkImgThumbnai = function (id, index, callback) {
        var re = this.http.get(this.getMediaUrl + id, {});
        re.subscribe(function (res1) {
            var sizeObj = res1.media_details.sizes;
            var urlImg = sizeObj['medium2-thumb'];
            var link = urlImg.source_url;
            // for(let o in sizeObj){
            //   console.log("test:"+o);
            // }
            callback(index, link);
        });
    };
    PostServiceProvider.prototype.getMenuPage = function () {
        return this.http.get(this.getMenuPageUrl);
    };
    PostServiceProvider.prototype.getDetailPost = function (postId) {
        return this.http.get(this.getDetailPostUrl + postId);
    };
    PostServiceProvider.prototype.searchKeyword = function (keySearch) {
        var params = {
            _embed: null,
            search: keySearch
        };
        return this.http.get(this.getPostUrl, { params: params });
    };
    /* Local Storage */
    PostServiceProvider.prototype.addOrRemoveListPostMark = function (post, callback) {
        var listPostMark = localStorage.getItem(this.LIST_POST_MARK_STR);
        if (listPostMark) {
            var data = JSON.parse(listPostMark);
            var index = data.findIndex(function (x) { return x.id == post.id; });
            console.log(post);
            console.log(index);
            if (index != -1) {
                data.splice(index, 1);
            }
            else {
                data.push({
                    id: post.id, img: post.img, datetime_create: post.datetime_create, title: post.title,
                    category: post.category
                });
            }
            localStorage.setItem(this.LIST_POST_MARK_STR, JSON.stringify(data));
            return callback(data);
        }
        else {
            var data = [{
                    id: post.id, img: post.img, datetime_create: post.datetime_create, title: post.title,
                    category: post.category
                }];
            localStorage.setItem(this.LIST_POST_MARK_STR, JSON.stringify(data));
            return callback(data);
        }
    };
    PostServiceProvider.prototype.getListPostMark = function (callback) {
        var listPostMark = localStorage.getItem(this.LIST_POST_MARK_STR);
        if (listPostMark) {
            return callback(JSON.parse(listPostMark));
        }
        else {
            return callback(null);
        }
    };
    PostServiceProvider.prototype.setDataHisttory = function (list) {
        localStorage.setItem(this.LIST_POST_HISTORY_STR, JSON.stringify(list));
    };
    PostServiceProvider.prototype.getListHistoryPost = function (callback) {
        var list = localStorage.getItem(this.LIST_POST_HISTORY_STR);
        if (list) {
            return callback(JSON.parse(list));
        }
        else {
            return callback(null);
        }
    };
    PostServiceProvider.prototype.setCategoryLocal = function (listCategory) {
        localStorage.setItem(this.LIST_CATEGORY_SAVE, JSON.stringify(listCategory));
    };
    PostServiceProvider.prototype.getLisstCategoryLocal = function () {
        var list = localStorage.getItem(this.LIST_CATEGORY_SAVE);
        return (list) ? JSON.parse(list) : [];
    };
    PostServiceProvider.prototype.getURLbase = function () {
        return this.env.serverUrl;
    };
    PostServiceProvider.prototype.setTypeView = function (type) {
        if (type === void 0) { type = null; }
        switch (type) {
            case this.TYPE_VIEW_NIGHT:
                localStorage.setItem(this.TYPE_VIEW_DETAIL_POST, this.TYPE_VIEW_NIGHT);
                break;
            default:
                localStorage.setItem(this.TYPE_VIEW_DETAIL_POST, this.TYPE_VIEW_DAYTIME);
                break;
        }
    };
    PostServiceProvider.prototype.getTypeView = function () {
        return localStorage.getItem(this.TYPE_VIEW_DETAIL_POST);
    };
    PostServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* Environment */]])
    ], PostServiceProvider);
    return PostServiceProvider;
}());

//# sourceMappingURL=post-service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabconfig_tabconfig__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_history_history__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_posts_posts__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_post_detail_post__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mark_list_mark_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_provider_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_environment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_posts_ImagePreloader__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_item_base_item_base__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_email_composer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_AppSingleton__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { Firebase } from '@ionic-native/firebase';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_post_detail_post__["a" /* DetailPostPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mark_list_mark_list__["a" /* MarkListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_posts_ImagePreloader__["a" /* ImagePreloader */],
                __WEBPACK_IMPORTED_MODULE_17__components_item_base_item_base__["a" /* ItemBaseComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* History */],
                __WEBPACK_IMPORTED_MODULE_0__pages_tabconfig_tabconfig__["a" /* TabConfigPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { swipeBackEnabled: true }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__providers_provider_module__["a" /* ProviderModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_post_detail_post__["a" /* DetailPostPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mark_list_mark_list__["a" /* MarkListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_history_history__["a" /* History */],
                __WEBPACK_IMPORTED_MODULE_0__pages_tabconfig_tabconfig__["a" /* TabConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_environment__["a" /* Environment */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_19__providers_AppSingleton__["a" /* AppSingleton */],
                // Firebase,
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mark_list_mark_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabconfig_tabconfig__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { isDifferent } from '@angular/core/src/render3/util';
// import { Firebase } from '@ionic-native/firebase';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuService, emailComposer
        // firebase: Firebase
    ) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuService = menuService;
        this.emailComposer = emailComposer;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // type view
        this.TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";
        this.isViewNight = false;
        this.initializeApp();
        // platform.ready().then(() => {
        //   firebase.getToken().then(token => console.log(token)).catch(err=> console.log(err));
        //   firebase.onNotificationOpen().subscribe(data=>{
        //     console.log(data);
        //     console.log(data.name)
        //   }, err=> console.log(err));
        // });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tin mới', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'fa-home' },
            { title: 'Đọc gần đây', component: __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* History */], icon: 'fa-thumb-tack' },
            { title: 'Các bài viết đánh dấu', component: __WEBPACK_IMPORTED_MODULE_5__pages_mark_list_mark_list__["a" /* MarkListPage */], icon: 'fa-thumb-tack' },
            { title: 'Gửi phản hồi', component: null, icon: 'fa-thumb-tack' },
            { title: 'Chọn chuyên mục', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabconfig_tabconfig__["a" /* TabConfigPage */], icon: 'fa-thumb-tack' }
        ];
        this.menuService.getMenuPage().subscribe(function (res) {
            if (res) {
                res.forEach(function (element) {
                    console.log(element);
                    if (element.menu_order != 0) {
                        _this.pages.push({
                            title: element.title.rendered, component: null, icon: 'fa-th-list'
                        });
                    }
                });
            }
        });
        var typeView = this.menuService.getTypeView();
        this.isViewNight = typeView == this.TYPE_VIEW_NIGHT;
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page, index) {
        console.log("menu:" + index);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (index == 3) {
            var email = {
                to: 'anhtan46@gmail.com',
                cc: '',
                bcc: [],
                subject: 'Phản Hồi',
                body: '',
                isHtml: true
            };
            this.emailComposer.open(email);
            return;
        }
        if (page.component) {
            if (index == 0) {
                this.nav.setRoot(page.component);
                return;
            }
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header class="menu-header">\n    <div>\n      <div class="icon-login">\n        <img src="../assets/imgs/fb-logo.png" alt="">\n      </div>\n      <div class="tx-login">Đăng nhập</div>\n    </div>\n  </ion-header>\n\n  <ion-content class="menu-tab-content">\n    <ion-list class="menu-item">\n      <button menuClose ion-item *ngFor="let p of pages,let i=index" (click)="openPage(p,i)">\n        <i class="fa {{p.icon}}" aria-hidden="true"></i> {{p.title}}\n      </button>\n      <button ion-item><i class="fa fa-facebook-official" aria-hidden="true"></i> Fanpage</button>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" class="{{isViewNight?\'night\':\'\'}}" #content swipeBackEnabled="true" id="root-app"></ion-nav>'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__["a" /* EmailComposer */]
            // firebase: Firebase
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export listNewsTongHop */
/* unused harmony export listNewsThoiSu */
/* unused harmony export listNewsTheThao */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listTabData; });
var listNewsTongHop = [
    {
        title: " Quân đội Syria nâng mức báo động chuẩn bị tấn công thành trì phiến quân",
        category: "Tổng hợp",
        author: "News24",
        time: "12 phút trước",
        content: "Các lực lượng Syria tập kết quanh Idlib đã được tăng viện và đặt trong tình trạng sẵn sàng chiến đấu cao.",
        img: "https://i-vnexpress.vnecdn.net/2018/09/06/syria-7429-1536208433_180x108.jpg"
    },
    {
        title: "Bộ Công an bổ nhiệm hàng loạt lãnh đạo Cục cảnh sát chống ma túy",
        category: "Pháp luật",
        author: "News24",
        time: "12 phút trước",
        content: "Tình trạng trộm cắp ngày càng gia tăng",
        img: "https://i-vnexpress.vnecdn.net/2018/09/06/PhamVanCac-1536212690-4171-1536212726_180x108.jpg"
    },
    {
        title: "Ba tháng xây mơ ước ở ngôi trường Khe Chữ ",
        category: "Pháp luật",
        author: "News24",
        time: "12 phút trước",
        content: "Lớp học dựng trên miếng đất ở góc làng với khung sắt, ",
        img: "https://i-vnexpress.vnecdn.net/2018/09/06/NGOITRUOCUOCMO00011612Still002-6684-2609-1536211814_180x108.png"
    },
    {
        title: "Báo Hàn Quốc tiết lộ mức lương của HLV Park Hang Seo với VFF",
        category: "Thể thao",
        author: "News24",
        time: "2 phút trước",
        content: "Mức lương mà HLV Park Hang Seo nhận được trong bản hợp đồng kéo dài 2 năm với VFF",
        img: "https://dantricdn.com/2018/9/6/park-1536200284652531967663.jpg"
    },
    {
        title: "Minh Vương: \"Toàn đội Olympic Việt Nam đã rơi nước mắt sau trận thua UAE\"",
        category: "Thể thao",
        author: "News24",
        time: "4 phút trước",
        content: "Minh Vương chia sẻ những cảm xúc sau trận thua UAE ở trận tranh HCĐ Asiad 2018, đồng thời anh cảm thấy vô cùng hạnh phúc khi được đối đầu với ngôi sao Son Heung Min",
        img: "https://dantricdn.com/thumb_w/640/2018/9/3/giaoluucauthuminhvuong-2-1535943436122609088930.jpg"
    },
    {
        title: "Đồ chơi Trung thu truyền thống: “Nhập thì nhiều, bán chả được bao nhiêu”",
        category: "Kinh doanh",
        author: "Dân trí",
        time: "1 phút trước",
        content: "Thực tế tại các cửa hàng kinh doanh đồ chơi Trung thu cho thấy, các sản phẩm đồ chơi truyền thống đang được nhập về rất nhiều nhưng lại bán ra không đáng kể",
        img: "https://dantricdn.com/thumb_w/640/2018/9/6/4086892122127237187559201733427592117092352n-15361736185411576567162.jpg"
    },
    {
        title: "Số phận nghiệt ngã của một người thầy",
        category: "Pháp luật",
        author: "News24",
        time: "12 phút trước",
        content: "Tôi muốn đứng lớp, muốn nhìn học sinh, muốn nghe tiếng trống trường, tiếng trống gắn bó hơn 20 năm qua",
        img: "https://dantricdn.com/thumb_w/640/2018/9/5/thayloc2-15361341565851260016674.jpg"
    },
    {
        title: "Học sinh và giáo viên khốn khó vì lốc xoáy cuốn bay mái phòng học, nhà ở",
        category: "Pháp luật",
        author: "News24",
        time: "12 phút trước",
        content: "Phòng học tạm bợ, nhà công vụ cũng tạm bợ, lại không có điện là tình cảnh của giáo viên",
        img: "https://dantricdn.com/thumb_w/640/2018/8/30/403229692281572578547081903376574686691328n-1535622912384871980041.jpg"
    },
    {
        title: "Tổng thống Trump giận dữ truy tìm quan chức cấp cao Nhà Trắng “phản bội”",
        category: "Thế giới",
        author: "News24",
        time: "12 phút trước",
        content: "Tổng thống Mỹ Donald Trump, ông Trump đã yêu cầu tờ báo công khai danh tính người “phản bội”",
        img: "https://dantricdn.com/thumb_w/640/2018/9/6/trump-153620861731931579018.jpg"
    }
];
// Tab Thoi su
var listNewsThoiSu = [
    {
        title: "Người gốc Việt đầu tiên trở thành Tư lệnh lục quân Mỹ tại Nhật Bản",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Thiếu tướng Mỹ gốc Việt Lương Xuân Việt vừa chính thức đảm nhận chức vụ Tư lệnh Lục quân Mỹ tại Nhật Bản ngày 28/8",
        img: "https://dantricdn.com/thumb_w/640/2018/8/29/luong-xuan-viet-2-153551969648974413753.jpg"
    },
    {
        title: "Xe quân sự Thổ Nhĩ Kỳ rầm rập tiến về Syria",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Một đoàn xe quân sự của Thổ Nhĩ Kỳ sáng 29/8 được nhìn thấy đã vượt qua biên giới, tiến về chốt quan sát của Thổ Nhĩ Kỳ",
        img: "https://dantricdn.com/thumb_w/640/2018/8/30/quan-su-1535603092554323012008.jpg"
    },
    {
        title: "Venezuela \"tê liệt\" sau phát hành tiền mới",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Việc đồng nội tệ Bolivar bỏ đi 5 số 0 chính thức đưa vào lưu thông hôm 20/8",
        img: "https://dantricdn.com/thumb_w/640/2018/8/22/venezuela-15349070588421920450462.jpg"
    },
    {
        title: "Iran tuyên bố kiểm soát hoàn toàn vùng Vịnh và eo biển Hormuz",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Một tư lệnh Lực lượng Vệ binh Cách mạng Iran ngày 27/8 tuyên bố nước này đã kiểm soát hoàn toàn vùng Vịnh Ba Tư",
        img: "https://dantricdn.com/2018/8/28/iran-15354144274261399760890.jpg"
    },
    {
        title: "Hãng tin Tasnim dẫn lời ông Alireza Tangsiri, tư lệnh Vệ binh Cách mạng Iran",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Hãng tin Tasnim dẫn lời ông Alireza Tangsiri, tư lệnh Vệ binh Cách mạng Iran",
        img: "https://dantricdn.com/zoom/279_210/2018/8/29/luong-xuan-viet-15355197245531843752377.jpg"
    },
    {
        title: "Lào dừng các dự án thủy điện mới sau thảm họa vỡ đập",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Chính phủ Lào ngày 7/8 thông báo sẽ rà soát lại tất cả các dự án đập thủy điện trên cả nước ",
        img: "https://dantricdn.com/2018/8/8/lao-1533684813826103238791.png"
    },
    {
        title: "Đợt thanh tra lần này sẽ có sự tham gia của đại diện Bộ Năng lượng và Mỏ",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "nếu phát hiện bất kỳ dấu hiệu bất thường nào trong việc thiết kế hay thi công dự án đập",
        img: "https://adi.admicro.vn/adt/adn/2018/08/adxma-adx5b88f8b102e0e.jpg"
    },
    {
        title: "Phái đoàn Trung Quốc tức giận bỏ họp thượng đỉnh vì không được phát biểu trước",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Không khí tại cuộc họp giữa đại diện các quốc gia thành viên Diễn đàn quần đảo Thái Bình Dương",
        img: "https://dantricdn.com/2018/9/5/phai-doan-15361417583691220130117.jpg"
    },
    {
        title: "Trung Quốc không phải là thành viên của Diễn đàn Quần đảo Thái Bình Dương",
        category: "Thời sự",
        author: "News24",
        time: "12 phút trước",
        content: "Là một trong 18 quốc gia có đại diện tại cuộc họp ",
        img: "https://dantricdn.com/2018/9/5/trung-quoc-15361417031102097541447.webp"
    }
];
// Tab The thao
var listNewsTheThao = [
    {
        title: "Xuân Trường đánh rơi phong độ ở Asiad 2018 vì… viêm mũi?",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Xuân Trường đang phải đưa ra quyết định có tiểu phẫu hay không để xử lý dứt điểm vết thương ở cuống mũi",
        img: "https://dantricdn.com/2018/9/6/xt-1536210533678700630341.jpg"
    },
    {
        title: "các bác sĩ của HA Gia Lai tiết lộ Xuân Trường bị viêm cuốn mũi",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Trường sẽ tiểu phẫu mới sớm trở lại với phong độ tốt nhất",
        img: "https://dantricdn.com/2018/9/6/xt-1536210533678700630341.jpg"
    },
    {
        title: "Olympic Nhật Bản 1-2 Olympic Hàn Quốc: Son Heung Min hoàn tất tấm HCV Asiad",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Đội bóng xứ kim chi đã chính thức giành HCV môn bóng đá nam Asiad 2018",
        img: "https://dantricdn.com/thumb_w/640/2018/9/1/unnamed-15358034092321229217719.jpg"
    },
    {
        title: "Son Heung Min bị hậu vệ Nhật Bản kèm rất chặt",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Hwang Ui Jo có tình huống đánh nguội với cầu thủ Nhật Bản",
        img: "https://dantricdn.com/thumb_w/640/2018/9/1/6-15358034092272137522695.jpg"
    },
    {
        title: "Hãng tin Tasnim dẫn lời ông Alireza Tangsiri, tư lệnh Vệ binh Cách mạng Iran",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Hãng tin Tasnim dẫn lời ông Alireza Tangsiri, tư lệnh Vệ binh Cách mạng Iran",
        img: "https://dantricdn.com/zoom/279_210/2018/8/29/luong-xuan-viet-15355197245531843752377.jpg"
    },
    {
        title: "Nhật Bản đang chơi phòng ngự đầy chặt chẽ",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "hàng thủ Nhật Bản vẫn đang chơi đầy chắc chắn",
        img: "https://dantricdn.com/thumb_w/640/2018/9/1/5-153580340922413428236.jpg"
    },
    {
        title: "Son Heung Min vẫn để lại nhiều dấu ấn trong lối chơi của Olympic Hàn Quốc",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Hàn Quốc rồi dứt điểm căng ở góc hẹp",
        img: "https://dantricdn.com/thumb_w/640/2018/9/1/4-15358034092201869128968.jpg"
    },
    {
        title: "Báo Indonesia gọi Olympic Việt Nam là kẻ thống trị Đông Nam Á",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "thành tích đó quá khiêm tốn nếu so sánh với Olympic Việt Nam",
        img: "https://dantricdn.com/2018/9/5/vantoan-15361355162511320494386.jpg"
    },
    {
        title: "AFF Cup 2018 sẽ diễn ra từ 8/11 đến 15/12",
        category: "Thể thao",
        author: "News24",
        time: "12 phút trước",
        content: "Malaysia cũng chỉ vào đến vòng 1/8",
        img: "https://dantricdn.com/zoom/125_78/2018/9/5/park-15361153032671685104377.jpg"
    }
];
var listTabData = [
    {
        "id": 48,
        "active": 0,
        "name": "Tin nóng",
        "backgroundColor": "#ef9e25",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 20,
        "active": 0,
        "name": "Xã hội",
        "backgroundColor": "#3878b7",
        "loadSuccess": false,
        "count": 218,
        "isShow": true
    },
    {
        "id": 1,
        "active": 0,
        "name": "Thời sự",
        "backgroundColor": "#2b43bc",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 21,
        "active": 0,
        "name": "Thế giới",
        "backgroundColor": "#bf2254",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 22,
        "active": 0,
        "name": "Văn hóa",
        "backgroundColor": "#6f38a0",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 16,
        "active": 0,
        "name": "Kinh tế",
        "backgroundColor": "#19a899",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 12,
        "active": 0,
        "name": "Giáo dục",
        "backgroundColor": "#6f38a0",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 7,
        "active": 0,
        "name": "Thể thao",
        "backgroundColor": "#f7364c",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 17,
        "active": 0,
        "name": "Giải trí",
        "backgroundColor": "#2b43bc",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 15,
        "active": 0,
        "name": "Pháp luật",
        "backgroundColor": "#07911b",
        "loadSuccess": false,
        "count": 131,
        "isShow": true
    },
    {
        "id": 23,
        "active": 0,
        "name": "Đời sống",
        "backgroundColor": "#f7364c",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 9,
        "active": 0,
        "name": "Khoa học",
        "backgroundColor": "#3878b7",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 14,
        "active": 0,
        "name": "Công nghệ",
        "backgroundColor": "#bf2254",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 10,
        "active": 0,
        "name": "Sức khỏe",
        "backgroundColor": "#6d8c47",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    },
    {
        "id": 2,
        "active": 0,
        "name": "Xe++",
        "backgroundColor": "#19a899",
        "loadSuccess": false,
        "count": 0,
        "isShow": true
    }
];

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_post_detail_post__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_environment__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_Util__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SRC_IMG_DEFAULT = "https://danangz.vn/wp-content/uploads/2016/12/logo-danangz-da-moi.png";
var PostsPage = /** @class */ (function () {
    function PostsPage(navCtrl, navParams, postService, env, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.env = env;
        this.plt = plt;
        this.myImgUrl = './assets/images/myimage.png';
        this.loadSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.listPost = [];
        this.dataPost = [];
        this.listPostMini = [];
        this.styleFilter = [];
        this.currentPage = 1;
        this.canLoadMore = true;
        this.isErrorDataFirst = false;
        this.styleFilter = ['type-1', 'default'];
        this.startLoađata(null);
    }
    PostsPage.prototype.ionViewDidEnter = function () {
    };
    PostsPage.prototype.ngOnChanges = function () {
        // if (this.isInit) {
        var _this = this;
        this.startLoađata(null);
        var scroll = this.content.getScrollElement();
        this.lastScroll = 0;
        scroll.addEventListener('scroll', function () {
            // console.log("count:"+this.countPost);
            if (_this.countPost > _this.listPost.length || _this.idCategory == "") {
                _this.showSroll(scroll);
            }
        });
    };
    PostsPage.prototype.checkLoadDataFirst = function () {
        var _this = this;
        this.myCountDownTime = setInterval(function () {
            clearInterval(_this.myCountDownTime);
            if (_this.isErrorDataFirst || _this.listPost.length == 0) {
                _this.startLoađata(null);
            }
        }, 15000);
    };
    PostsPage.prototype.startLoađata = function (callback) {
        var _this = this;
        this.isErrorDataFirst = false;
        this.initListPost(function (res) {
            if (_this.myCountDownTime) {
                clearInterval(_this.myCountDownTime);
            }
            _this.isErrorDataFirst = false;
            _this.dataPost = [];
            if (_this.typeFilter == 0) {
                _this.postMain = _this.listPost[0];
            }
            if (callback) {
                callback();
            }
            // Emit loading success
            _this.loadSuccess.emit(true);
        }, function (e) {
            if (e) {
                console.log("error:" + e);
                _this.isErrorDataFirst = true;
            }
        });
    };
    PostsPage.prototype.showSroll = function (scroll) {
        var _this = this;
        console.log("size:" + this.listPost.length);
        console.log('call loadmore 1');
        var scrollTop = scroll.scrollTop;
        if (this.canLoadMore && scrollTop > this.lastScroll && scroll.scrollTop + window.innerHeight - 100 >= scroll.scrollHeight) {
            console.log('call loadmore');
            this.canLoadMore = false;
            this.currentPage++;
            this.postService.getPost(this.idCategory, this.currentPage).subscribe(function (res) {
                var count = 0;
                res.forEach(function (element) {
                    console.log("log test:page " + _this.currentPage + " ; " + element.title.rendered);
                    var html = document.createElement("div");
                    html.innerHTML = element.content.rendered;
                    // let img = html.getElementsByTagName('img')[0];
                    // let tileNew = this.toStringHandle(element.title.rendered);
                    // let imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;
                    var newObj = _this.getObjItem(element);
                    _this.listPost.push(newObj);
                    console.log("log test:page obj" + _this.currentPage + " : " + newObj.title);
                    count++;
                    if (count == res.length) {
                        _this.canLoadMore = true;
                    }
                });
            });
        }
        this.lastScroll = screenTop;
    };
    PostsPage.prototype.initListPost = function (callback, erroCallback) {
        var _this = this;
        if (this.active) {
            this.postService.getPost(this.idCategory, 1).subscribe(function (res) {
                console.log(res);
                _this.listPost = [];
                if (res) {
                    res.forEach(function (element) {
                        var html = document.createElement("div");
                        html.innerHTML = element.content.rendered;
                        var newObj = _this.getObjItem(element);
                        _this.listPost.push(newObj);
                        if (_this.listPostMini && _this.listPostMini.length < 11)
                            _this.listPostMini.push(newObj);
                        if (_this.listPost.length == res.length) {
                            // this.listPost=this.sortByFrom(this.listPost);
                            return callback(true);
                        }
                    });
                }
            }, function (e) {
                erroCallback(e);
            });
        }
    };
    PostsPage.prototype.toStringHandle = function (st) {
        var str = st;
        // console.log("to string:"+JSON.stringify(st));
        while (str.indexOf("&#") != -1) {
            var find = str.indexOf("&#");
            var temp = str.substring(find, find + 7);
            str = str.replace(temp, '');
        }
        return str;
    };
    PostsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PostsPage');
    };
    PostsPage.prototype.getIndexFilterPost = function (num, per, index) {
        return (num % per == index);
    };
    PostsPage.prototype.openDetailPost = function (post) {
        console.log('click DetailPostPage');
        if (this.listPostMini.length <= 0) {
            // this.listPostMini = this.listPost;
        }
        console.log("click id categori: " + post.idCategories);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_post_detail_post__["a" /* DetailPostPage */], {
            id: post.id,
            title: post.title,
            content: post.detail,
            des: post.des,
            time: post.time,
            author: post.author,
            category: this.nameCategory,
            idCategories: post.idCategories,
            img: post.img,
            datetime_create: post.datetime_create,
            link: post.link,
            listPost: this.listPostMini,
        });
        // console.log(post);
    };
    PostsPage.prototype.getObjItem = function (e) {
        if (this.env.serverUrl == "https://tin61.com/") {
            return __WEBPACK_IMPORTED_MODULE_5__util_Util__["a" /* Utils */].getObjItemTin68(e, (this.plt.is('ios')));
        }
        return __WEBPACK_IMPORTED_MODULE_5__util_Util__["a" /* Utils */].getObjItemDannangZ(e, (this.plt.is('ios')));
    };
    PostsPage.prototype.getObjItemDannangZ = function (element) {
        var html = document.createElement("div");
        html.innerHTML = element.content.rendered;
        // let img = html.getElementsByTagName('img')[0];
        var tileNew = this.toStringHandle(element.title.rendered);
        // let contentNew=this.toStringHandle(element.content.rendered);
        var imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;
        // let imgI='http://tin60.com/wp-content/uploads/2018/09/9ab7157cfa38d8260c8d98702b14e9e3-300x157.jpg';
        var obj = {
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
        };
        return obj;
    };
    PostsPage.prototype.getSrcImgByContent = function (conten) {
        return "https://danangz.vn/wp-content/uploads/2018/09/papa.jpg";
    };
    PostsPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    PostsPage.prototype.getTimeFormat = function (date) {
        // let stTime = "";
        var d = new Date(date);
        var dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        var timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
        var time = timeMinute < 60 ? timeMinute + ' phút trước' :
            timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
        return time;
    };
    PostsPage.prototype.doRefresh = function (refresher) {
        this.startLoađata(function () {
            refresher.complete();
        });
    };
    PostsPage.prototype.sortByFrom = function (arr) {
        var sortBy = (function () {
            var toString = Object.prototype.toString, 
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
                if (!(array instanceof Array && array.length))
                    return [];
                if (toString.call(cfg) !== "[object Object]")
                    cfg = {};
                if (typeof cfg.parser !== "function")
                    cfg.parser = parse;
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], PostsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "typeFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "isInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "idCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "nameCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "countPost", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], PostsPage.prototype, "loadSuccess", void 0);
    PostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-posts',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/posts/posts.html"*/'<ion-content #list class="{{styleFilter[typeFilter]}}">\n    <ion-refresher  (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n    <div *ngIf="typeFilter==0">\n      <ion-grid *ngIf="postMain">\n        <ion-row>\n          <ion-col class="post main" (click)="openDetailPost(postMain)">\n            <div class="image">\n              <img img-preloader="{{postMain.img}}" />\n            </div>\n            <div class="title">{{postMain.title}}</div>\n            <div class="meta-post">\n              <div class="meta-category">{{postMain.author}}</div>\n              <div class="meta-detail">\n                <i>{{postMain.time}}</i>\n              </div>\n            </div>\n            <div class="content" [innerHtml]="postMain.content"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n        <div *ngFor="let item of listPost; let i=index"  >\n          <ion-grid *ngIf="(i%4==1||i%4==2)&&(i>0)">\n            <ion-row *ngIf="i%4==1" class="single-top">\n              <ion-col   class="post single-top" (click)="openDetailPost(item)">\n                <div class="image">\n                  <img img-preloader="{{item.img}}" />\n                </div>\n                <div class="title">{{item.title}}</div>\n                <div class="meta-post">\n                  <div class="meta-category">{{item.category}}</div>\n                  <div class="meta-detail">\n                    <!-- <i class="line">{{item[0].author}}</i> -->\n                    <i>{{item.time}}</i>\n                  </div>\n                </div>\n                <!-- <div class="content" [innerHtml]="item[0].content"></div> -->\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="i%4==2" class="single-top">\n              <ion-col  class="post single-top" (click)="openDetailPost(item)">\n                <div class="image">\n                  <img img-preloader="{{item.img}}" />\n                </div>\n                <div class="title">{{item.title}}</div>\n                <div class="meta-post">\n                  <div class="meta-category">{{item.category}}</div>\n                  <div class="meta-detail">\n                    <!-- <i class="line">{{item[1].author}}</i> -->\n                    <i>{{item.time}}</i>\n                  </div>\n                </div>\n                <!-- <div class="content"  [innerHtml]="item[0].content"></div> -->\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid *ngIf="(i%4==0)&&(i>0)">\n            <ion-row >\n              <ion-col col-6  class="post half-side odd" (click)="openDetailPost(listPost[i-1])">\n                  <div class="image">\n                    <img img-preloader="{{listPost[i+-1].img}}" />\n                  </div>\n                  <div class="title">{{listPost[i-1].title}}</div>\n                  <div class="meta-post">\n                    <div class="meta-category">{{listPost[i-1].category}}</div>\n                    <div class="meta-detail">\n             \n                      <i>{{listPost[i-1].time}}</i>\n                    </div>\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-6  class="post half-side odd" (click)="openDetailPost(item)">\n                    <div class="image">\n                      <img img-preloader="{{item.img}}" />\n                    </div>\n                    <div class="title">{{item.title}}</div>\n                    <div class="meta-post">\n                      <div class="meta-category">{{item.category}}</div>\n                      <div class="meta-detail">\n                        <i>{{item.time}}</i>\n                      </div>\n                    </div>\n                  </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n    </div>\n    <div *ngIf="typeFilter==1">\n      <ion-grid *ngFor="let item of listPost; let i=index">\n        <ion-row>\n          <ion-col class="post" (click)="openDetailPost(item)">\n            <div class="top-type-1"> \n                <div class="meta-post">\n                    <div class="meta-category">{{item.category}}</div>\n                    <div class="meta-detail">\n                      <i class="line">{{item.author}}</i><i>{{item.time}}</i>\n                    </div>\n                  </div>\n                  <div class="mask-share">\n                      <a href="#"><ion-icon ios="ios-bookmark-outline" md="ios-bookmark-outline"></ion-icon></a>\n                      <a href="#"><ion-icon ios="md-share" md="md-share"></ion-icon></a>\n                    </div>\n            </div>\n            <br>\n            <div class="title">{{item.title}}</div>\n            <div class="image" >\n              <img img-preloader="{{item.img}}" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="loading" *ngIf="!canLoadMore">\n      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/posts/posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_environment__["a" /* Environment */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], PostsPage);
    return PostsPage;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule_1 = ProviderModule;
    ProviderModule.forRoot = function () {
        return {
            ngModule: ProviderModule_1
        };
    };
    ProviderModule = ProviderModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */]
            ],
        })
    ], ProviderModule);
    return ProviderModule;
    var ProviderModule_1;
}());

//# sourceMappingURL=provider.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreloader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// An image directive based on http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript

// Define the Directive meta data
var ImagePreloader = /** @class */ (function () {
    function ImagePreloader() {
        // Set an input so the directive can set a default image.
        this.defaultImage = 'assets/preloader.gif';
    }
    //ngOnInit is needed to access the @inputs() variables. these aren't available on constructor()
    ImagePreloader.prototype.ngOnInit = function () {
        var _this = this;
        //First set the final image to some default image while we prepare our preloader:
        this.finalImage = this.defaultImage;
        this.downloadingImage = new Image(); // create image object
        this.downloadingImage.onload = function () {
            console.log('image downloaded');
            _this.finalImage = _this.targetSource; //do the switch 😀
        };
        // Assign the src to that of some_remote_image_url. Since its an Image Object the
        // on assignment from this.targetSource download would start immediately in the background
        // and trigger the onload()
        this.downloadingImage.src = this.targetSource;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('img-preloader'),
        __metadata("design:type", String)
    ], ImagePreloader.prototype, "targetSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ImagePreloader.prototype, "defaultImage", void 0);
    ImagePreloader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[img-preloader]',
            host: {
                '[attr.src]': 'finalImage' //the attribute of the host element we want to update. in this case, <img 'src' />
            }
        })
        //Class must implement OnInit for @Input()
    ], ImagePreloader);
    return ImagePreloader;
}());

//# sourceMappingURL=ImagePreloader.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Util__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ItemBaseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ItemBaseComponent = /** @class */ (function () {
    function ItemBaseComponent(plt) {
        this.plt = plt;
        console.log('Data:' + JSON.stringify(this.post));
    }
    ItemBaseComponent.prototype.getTimeFormat = function (date) {
        var time = (this.plt.is('ios')) ? __WEBPACK_IMPORTED_MODULE_2__util_Util__["a" /* Utils */].getTimeFormatIOS(date) : __WEBPACK_IMPORTED_MODULE_2__util_Util__["a" /* Utils */].getTimeFormat(date);
        return time;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ItemBaseComponent.prototype, "post", void 0);
    ItemBaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'item-base',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/components/item-base/item-base.html"*/'<!-- Generated template for the ItemBaseComponent component -->\n<div  class="post single-top">\n  <div class="image">\n    <img img-preloader="{{post.img}}" />\n  </div>\n  <div class="title">{{post.title}}</div>\n  <div class="meta-post">\n    <div class="meta-category">{{post.category}}</div>\n    <div class="meta-detail">\n      <i>{{(post.time)?post.time:getTimeFormat(post.datetime_create)}}</i>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/components/item-base/item-base.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], ItemBaseComponent);
    return ItemBaseComponent;
}());

//# sourceMappingURL=item-base.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_AppSingleton__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPostPage = /** @class */ (function () {
    function DetailPostPage(navCtrl, navParams, postService, shareObj, singleton) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.shareObj = shareObj;
        this.singleton = singleton;
        this.listPost = [];
        this.isMarked = false;
        this.TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";
        this.nightView = '';
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
        this.postService.getListPostMark(function (res) {
            if (res) {
                var index = res.findIndex(function (x) { return x.id == _this.navParams.get('id'); });
                if (index != -1) {
                    _this.isMarked = true;
                }
            }
        });
        this.linkWeb = this.navParams.get("link");
        this.nightView = this.postService.getTypeView();
    }
    DetailPostPage_1 = DetailPostPage;
    DetailPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPostPage');
        // this.listPost=this.navParams.get("listPost");
        console.log('id:' + this.id);
        console.log(this.nightView);
    };
    DetailPostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.postService.setTypeView();
        var type = this.postService.getTypeView();
        console.log('ionViewWillEnter DetailPostPage');
        console.log("id cate:" + this.idCategory);
        try {
            var find = this.singleton.listItemsTab.findIndex(function (e) { return e.id == _this.idCategory; });
            console.log("obj cate:" + JSON.stringify(this.singleton.listItemsTab[find]));
            if (find != 1) {
                this.category = this.singleton.listItemsTab[find].name;
            }
        }
        catch (error) {
            this.idCategory = "";
        }
        try {
            this.getPostMore();
            this.setInHistory();
        }
        catch (error) {
        }
        this.content = this.navParams.get("content");
    };
    DetailPostPage.prototype.getPostMore = function () {
        var _this = this;
        var list = this.navParams.get("listPost");
        if (!list)
            return;
        this.listPost = list.filter(function (post) {
            // return post;
            if (post.id !== _this.id) {
                return post;
            }
        });
    };
    DetailPostPage.prototype.markPost = function () {
        var _this = this;
        var post = {
            id: this.navParams.get('id'),
            img: this.navParams.get('img'),
            datetime_create: this.navParams.get('datetime_create'),
            title: this.navParams.get("title"),
            idCategory: this.idCategory,
            category: this.category
        };
        this.postService.addOrRemoveListPostMark(post, function (res) {
            console.log(res);
            _this.isMarked = !_this.isMarked;
        });
    };
    DetailPostPage.prototype.setInHistory = function () {
        var _this = this;
        var post = {
            id: this.navParams.get('id'),
            img: this.navParams.get('img'),
            datetime_create: this.navParams.get('datetime_create'),
            title: this.navParams.get("title"),
            category: this.category,
            idCategory: this.idCategory
        };
        var listHistory = [];
        this.postService.getListHistoryPost(function (e) {
            if (e) {
                listHistory = e;
                console.log("list history:" + JSON.stringify(listHistory));
                var find = listHistory.findIndex(function (x) { return x.id === _this.id; });
                console.log("find: id:" + _this.id + " f:" + find);
                if (find != -1) {
                    listHistory.splice(find, 1);
                    listHistory.unshift(post);
                }
                else {
                    listHistory.unshift(post);
                }
                if (listHistory.length > 20) {
                    listHistory.splice(listHistory.length - 1, 1);
                }
                _this.postService.setDataHisttory(listHistory);
            }
            else {
                listHistory.unshift(post);
                _this.postService.setDataHisttory(listHistory);
            }
        });
    };
    DetailPostPage.prototype.sharePost = function () {
        console.log(this.linkWeb);
        debugger;
        this.shareObj.share(this.title, this.content, null, this.linkWeb).then(function () {
        }).catch(function () {
        });
    };
    DetailPostPage.prototype.onDetailPost = function (post) {
        this.navCtrl.push(DetailPostPage_1, {
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
    };
    DetailPostPage.prototype.changeViewNight = function () {
        if (this.nightView == this.TYPE_VIEW_NIGHT) {
            var app = document.getElementById('root-app');
            app.className = app.className.replace('night', '');
            this.postService.setTypeView();
        }
        else {
            var app = document.getElementById('root-app');
            app.className += "night";
            this.postService.setTypeView(this.TYPE_VIEW_NIGHT);
        }
        this.nightView = this.nightView == this.TYPE_VIEW_NIGHT ? 'none' : this.TYPE_VIEW_NIGHT;
    };
    DetailPostPage = DetailPostPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail-post',template:/*ion-inline-start:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/detail-post/detail-post.html"*/'<!--\n  Generated template for the DetailPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{category}}</ion-title>\n    <button ion-button class="btn-header-right" (click)="changeViewNight()">\n      <ion-icon ios="ios-options-outline" md="ios-options-outline"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="detail-post" >\n  <div class="title">{{title}}</div>\n  <div class="meta">\n    <div class="category">{{category}}</div>\n    <div class="author">{{author}}</div>\n    <div class="time">{{time}}</div>\n  </div>\n  <div class="desContent" [innerHtml]="des"></div>\n  <div class="contentHtml" [innerHtml]="content"></div>\n  <div class="postMore">\n    <hr>\n    <h3>TIN LIÊN QUAN</h3>\n    <ion-list>\n      <div *ngFor="let item of listPost"  (click)="onDetailPost(item)">\n        <item-base [post]="item"></item-base>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer class="footer-tab-btn">\n  <div class="tab-btn-item">\n    <button (click)="sharePost()">\n      <ion-icon ios="md-share" md="md-share"></ion-icon><br>\n      <span>Chia sẻ</span>\n    </button>\n  </div>\n  <div class="tab-btn-item">\n    <button (click)="markPost()">\n      <ion-icon ios="{{isMarked?\'ios-bookmark\':\'ios-bookmark-outline\'}}" md="{{isMarked?\'ios-bookmark\':\'ios-bookmark-outline\'}}"></ion-icon><br>\n      <span>Đánh dấu</span>\n    </button>\n    </div>\n  </ion-footer>\n  \n'/*ion-inline-end:"/Users/hoangphuc/Desktop/ionic/new24h/src/pages/detail-post/detail-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_post_service_post_service__["a" /* PostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__providers_AppSingleton__["a" /* AppSingleton */]])
    ], DetailPostPage);
    return DetailPostPage;
    var DetailPostPage_1;
}());

//# sourceMappingURL=detail-post.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSingleton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSingleton = /** @class */ (function () {
    function AppSingleton() {
        this.listItemsTab = [];
        this.data = "init data";
        console.log('Hello Singleton Provider');
    }
    AppSingleton.prototype.set = function (data) {
        this.data = data;
    };
    AppSingleton.prototype.log = function () {
        console.log(this.data);
    };
    AppSingleton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppSingleton);
    return AppSingleton;
}());

//# sourceMappingURL=AppSingleton.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = /** @class */ (function () {
    function Environment() {
        this.serverUrl = 'https://danangz.vn/';
        // serverUrl = 'https://tin61.com/';
    }
    return Environment;
}());

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var SRC_IMG_DEFAULT = "http://tin61.com/wp-content/uploads/2018/09/thumb-default-1-210x136.jpg";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.log = function (msg) {
        console.log(msg);
    };
    Utils.getObjItemBaseApp = function (url, element, isIos) {
        if (url == 'https://tin61.com/') {
            return this.getObjItemTin68(element, isIos);
        }
        return this.getObjItemDannangZ(element, isIos);
    };
    //
    Utils.getObjItemTin68 = function (element, isIos) {
        var html = document.createElement("div");
        html.innerHTML = element.content.rendered;
        // let img = html.getElementsByTagName('img')[0];
        var tileNew = this.toStringHandle(element.title.rendered);
        var imgI = element._embedded['wp:featuredmedia'];
        if (imgI) {
            if (imgI[0].media_details.sizes['medium'] && imgI[0].media_details.sizes['full'].source_url)
                imgI = imgI[0].media_details.sizes['full'].source_url;
            else
                imgI = null;
        }
        var time = (isIos) ? this.getTimeFormatIOS(element.date) : this.getTimeFormat(element.date);
        this.log("element id category:" + element.categories[0]);
        var obj = {
            id: element.id,
            title: tileNew,
            img: (imgI) ? imgI : SRC_IMG_DEFAULT,
            idCategories: element.categories[0],
            category: element.nameCategory,
            des: element.excerpt.rendered,
            detail: element.content.rendered,
            time: time,
            author: element._embedded.author[0].name,
            link: element.link,
            datetime_create: element.date
        };
        return obj;
    };
    Utils.getObjItemDannangZ = function (element, isIos) {
        var html = document.createElement("div");
        html.innerHTML = element.content.rendered;
        // let img = html.getElementsByTagName('img')[0];
        var tileNew = this.toStringHandle(element.title.rendered);
        // let contentNew=this.toStringHandle(element.content.rendered);
        var imgI;
        try {
            imgI = element._embedded['wp:featuredmedia'][0].media_details.sizes['medium-thumb'].source_url;
        }
        catch (error) {
            imgI = null;
        }
        var time = (isIos) ? this.getTimeFormatIOS(element.date) : this.getTimeFormat(element.date);
        // let imgI='http://tin60.com/wp-content/uploads/2018/09/9ab7157cfa38d8260c8d98702b14e9e3-300x157.jpg';
        var obj = {
            id: element.id,
            title: tileNew,
            img: (imgI) ? imgI : SRC_IMG_DEFAULT,
            category: element.nameCategory,
            des: element.excerpt.rendered,
            detail: element.content.rendered,
            time: time,
            author: element._embedded.author[0].name,
            link: element.link,
            datetime_create: element.date
        };
        return obj;
    };
    Utils.getTimeFormatIOS = function (date) {
        var stTime = "";
        var d = new Date(date);
        var dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        var timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
        var time = ((timeMinute + 420) < 60) ? (timeMinute + 420) + ' phút trước' :
            // no ios  let time = (timeMinute < 60) ? (timeMinute ) + ' phút trước' :
            ((timeMinute + 420) < 1440 ? Math.floor((timeMinute + 420) / 60) + ' giờ trước' : dateFormat);
        return time;
    };
    Utils.getTimeFormat = function (date) {
        var stTime = "";
        // let df= new Date(date);
        // let long=df.getTime()+420*60*100;
        var d = new Date(date);
        // let timeCurent = new Date();
        // let temp = Math.floor((timeCurent.getTime() - d.getTime()) / 1000);
        // console.log("time:" + timeCurent.getTime());
        // console.log("time 1:" + d.getTime());
        // console.log("time 2:" + temp);
        // if (temp >= 24 * 60 * 60) {
        //     stTime = this.formatDate(date);
        // } else {
        //     let temp2 = Math.floor(temp / 60 / 60);
        //     if (temp2 > 0) {
        //         stTime = Math.floor(temp / 60 / 60) + " giờ trước";
        //     } else {
        //         stTime = Math.abs(temp % (60)) + " Phút trước";
        //     }
        // }
        // return stTime;
        var dateFormat = d.getFullYear() + '-' +
            (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' +
            (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        var timeMinute = Math.floor((Date.now() - Date.parse(date)) / 1000 / 60);
        // no ios 
        var time = (timeMinute < 60) ? (timeMinute) + ' phút trước' :
            timeMinute < 1440 ? Math.floor(timeMinute / 60) + ' giờ trước' : dateFormat;
        return time;
    };
    Utils.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    Utils.toStringHandle = function (st) {
        var str = st;
        // console.log("to string:"+JSON.stringify(st));
        while (str.indexOf("&#") != -1) {
            var find = str.indexOf("&#");
            var temp = str.substring(find, find + 7);
            str = str.replace(temp, '');
        }
        return str;
    };
    return Utils;
}());

//# sourceMappingURL=Util.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map