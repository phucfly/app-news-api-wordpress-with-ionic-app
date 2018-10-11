import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PostServiceProvider } from '../providers/post-service/post-service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        PostServiceProvider
    ],
  })
  export class ProviderModule {
    static forRoot(): ModuleWithProviders {
      return {
          ngModule: ProviderModule
      };
  }
}