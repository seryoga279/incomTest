import {Component, HostListener, OnInit} from '@angular/core';
import {YoutubeService} from "../services/youtube.service";
import {takeUntil} from "rxjs/operators";
import {UnsubscribeComponent} from "../shared/component/unsubscribe/unsubscribe.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends UnsubscribeComponent implements OnInit {

  nextPageToken: string;
  videoList = [];

  @HostListener('window:scroll', []) public onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.getVideos(this.nextPageToken);
    }
  }

  constructor(private youtubeService: YoutubeService,
              private searchService: SearchService) {
    super();
  }

  private updateVideoList(res) {
    this.videoList = [...this.videoList, ...res.items];
    this.nextPageToken = res.nextPageToken
  }

  ngOnInit(): void {
    this.searchService.getSearchQuery().pipe(takeUntil(this.unsubscribe)).subscribe((query: string) => {
      this.videoList = [];
      if (!query || query === '') {
        this.nextPageToken = null;
        this.getVideos();
      } else {
        this.searchVideo(query);
      }
    })
  }

  getVideos(nextPage?: string): void {
    this.youtubeService.getTopVideos(nextPage).pipe(takeUntil(this.unsubscribe)).subscribe(res => this.updateVideoList(res));
  }

  searchVideo(query: string, nextPage?: string): void {
    this.nextPageToken = null;
    this.youtubeService.searchByQuery(query, nextPage).pipe(takeUntil(this.unsubscribe)).subscribe(res => this.updateVideoList(res))
  }

}
