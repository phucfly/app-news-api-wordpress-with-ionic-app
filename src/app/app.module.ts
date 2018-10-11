import { TabConfigPage } from './../pages/tabconfig/tabconfig';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { History } from '../pages/history/history';
import { PostsPage } from '../pages/posts/posts';
import { DetailPostPage } from '../pages/detail-post/detail-post';
import { MarkListPage } from '../pages/mark-list/mark-list';
import {SearchPage} from '../pages/search/search'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProviderModule } from '../providers/provider.module';
import { Environment } from '../providers/environment';
import { ImagePreloader } from '../pages/posts/ImagePreloader';
import {SocialSharing} from '@ionic-native/social-sharing'
import { ItemBaseComponent } from '../components/item-base/item-base';
import { EmailComposer } from '@ionic-native/email-composer';

import { AppSingleton } from '../providers/AppSingleton';
// import { Firebase } from '@ionic-native/firebase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostsPage,
    DetailPostPage,
    MarkListPage,
    ImagePreloader,
    ItemBaseComponent,
    SearchPage,
    History,
    TabConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { swipeBackEnabled: true }),
    ProviderModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostsPage,
    DetailPostPage,
    MarkListPage,
    SearchPage,
    History,
    TabConfigPage
  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen,
    Environment,
    EmailComposer,
    AppSingleton,
    // Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
