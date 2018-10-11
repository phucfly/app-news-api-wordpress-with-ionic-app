import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MarkListPage } from '../pages/mark-list/mark-list';
import { PostServiceProvider } from '../providers/post-service/post-service';

import { History } from '../pages/history/history';
import { EmailComposer } from '@ionic-native/email-composer';
import { TabConfigPage } from '../pages/tabconfig/tabconfig';
// import { isDifferent } from '@angular/core/src/render3/util';
// import { Firebase } from '@ionic-native/firebase';
 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  // type view
  TYPE_VIEW_NIGHT = "TYPE_VIEW_NIGHT";
  isViewNight = false;



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              private menuService: PostServiceProvider, public emailComposer:EmailComposer
              // firebase: Firebase
              ) {
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
      { title: 'Tin mới', component: HomePage, icon: 'fa-home' },
      { title: 'Đọc gần đây' , component: History, icon: 'fa-thumb-tack'},
      { title: 'Các bài viết đánh dấu' , component: MarkListPage, icon: 'fa-thumb-tack'},
      { title: 'Gửi phản hồi' , component: null, icon: 'fa-thumb-tack'},
      { title: 'Chọn chuyên mục' , component: TabConfigPage, icon: 'fa-thumb-tack'}
    ];

    this.menuService.getMenuPage().subscribe((res:any)=>{
      if(res){
        res.forEach(element => {
          console.log(element);
          if(element.menu_order!=0){
              this.pages.push(
                {
                  title: element.title.rendered, component: null, icon: 'fa-th-list'
                }
              )
          }
        });
      }
    });

    let typeView = this.menuService.getTypeView();

    this.isViewNight = typeView==this.TYPE_VIEW_NIGHT;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page,index) {
    console.log("menu:"+index);

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(index==3){
      let email = {
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
    if(page.component){
      if(index==0){
        this.nav.setRoot(page.component);
        return;
      }
      this.nav.push(page.component);
    }   
  }

}
