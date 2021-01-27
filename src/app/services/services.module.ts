import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeService } from './youtube.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    YoutubeService
  ],
  declarations: []
})
export class ServicesModule {}
