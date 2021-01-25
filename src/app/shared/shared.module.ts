import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "./material/material.module";
import {LetDirective} from "./directives/ng-let.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [YoutubePlayerComponent, LetDirective],
  exports: [
    YoutubePlayerComponent,
    MatToolbarModule,
    MaterialModule,
    LetDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
