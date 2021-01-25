import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {AuthState} from "./store/auth/auth-state.service";
import {environment} from "../environments/environment";
import {ServicesModule} from "./services/services.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'bookMarks.videos',
    }),
    ServicesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
